import { useState, useEffect } from 'react'
import Select from 'react-select'
import _debounce from 'lodash/debounce'
import { getLocationSuggestion, getLocationGeocode } from 'services/partner'
import styles from './styles'
export default function SearchLocation({
    onSelectValue,
    sessionToken,
    textLang,
}) {
    const [selectedOption, setSelectedOption] = useState('')
    const [options, setOptions] = useState(null)

    const handleChange = (selOption) => {
        setSelectedOption(selOption)
        getLocationGeocode({
            placeId: selOption.value || '',
            sessionToken,
        }).then((response) => {
            const objResponse = response && JSON.parse(response),
                geocode = objResponse?.result?.geometry?.location

            const addressComp = objResponse?.result?.address_components ?? [],
                country = addressComp.find(
                    (addr) => addr.types && addr.types.includes('country')
                )
            if (geocode) {
                geocode.country = country?.long_name ?? 'Indonesia'
            }

            if (onSelectValue) {
                onSelectValue(geocode)
            }
        })
    }

    const handleInputChange = (inputValue) => {
        processSearch(inputValue)
    }

    const processSearch = _debounce(async (value) => {
        if (value) {
            const suggestionText = await getLocationSuggestion({
                text: value,
                sessionToken,
            })
            const objSuggestion = suggestionText && JSON.parse(suggestionText)
            // console.log('objSuggestion', objSuggestion)
            let predictions = []
            if (objSuggestion && objSuggestion.predictions) {
                predictions = objSuggestion.predictions.map((pred) => {
                    return {
                        value: pred.place_id,
                        label: pred.description,
                    }
                })
            }

            // console.log('predictions', predictions)
            setOptions(predictions || [])
        }
    }, 500)

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: '#000',
            padding: 10,
            backgroundColor: state.isSelected ? '#c9e4e3' : 'transparent',
        }),
        control: (provided, state) => ({
            // none of react-select's styles are passed to <Control />
            ...provided,
            border: 0,
            borderRadius: '12px',
            boxShadow: 'none',
            maxHeight: '38px',
        }),
        clearIndicator: (provided, state) => ({
            alignSelf: 'flex-start',
            margin: '8px',
        }),
        dropdownIndicator: (provided, state) => ({
            alignSelf: 'flex-start',
            margin: '8px',
        }),
    }

    return (
        <>
            <Select
                value={selectedOption}
                onChange={handleChange}
                onInputChange={handleInputChange}
                options={options || []}
                className={'search-select-container'}
                styles={customStyles}
                noOptionsMessage={() => textLang['noOptions'] || ''}
            />
            <style jsx global>
                {styles}
            </style>
        </>
    )
}
