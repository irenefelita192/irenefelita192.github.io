import { useState, useEffect } from 'react'
import Select from 'react-select'
import styles from './styles'
export default function SearchSelect({
    onSelectValue,
    initialData,
    isMulti,
    textLang,
}) {
    const [selectedOption, setSelectedOption] = useState('')
    useEffect(() => {
        if (initialData) {
            setSelectedOption('')
        }
    }, [initialData])

    const handleChange = (selOption) => {
        setSelectedOption(selOption)
        if (!isMulti && onSelectValue) {
            onSelectValue(selOption)
        }
    }

    const onBlur = () => {
        if (isMulti && onSelectValue) {
            onSelectValue(selectedOption)
        }
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: '#000',
            padding: 10,
            backgroundColor: state.isSelected ? '#c9e4e3' : 'transparent',
        }),
        control: (provided, state) => ({
            ...provided,
            border: 0,
            borderRadius: '12px',
            boxShadow: 'none',
            maxHeight: '38px',
            overflow: state.isMulti ? 'auto' : 'hidden',
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
                options={initialData}
                className={'search-select-container'}
                styles={customStyles}
                isMulti={isMulti}
                onBlur={onBlur}
                closeMenuOnSelect={!isMulti}
                noOptionsMessage={() => textLang['noOptions']}
            />
            <style jsx global>
                {styles}
            </style>
        </>
    )
}
