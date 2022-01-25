import { useState, useEffect, useRef } from 'react'
import Select, { components } from 'react-select'
// import CheckboxOption from './checkbox-option'
import styles from './styles'

const CheckboxOption = ({ children, ...props }) => {
    const { isSelected, data, value } = props
    const onClick = (e) => {
        // console.log('data', data)
        props.selectOption({ ...data })
        e.stopPropagation()
        e.preventDefault()
    }
    return (
        <components.Option {...props}>
            <div className="options-container" onClick={onClick}>
                <input
                    type="checkbox"
                    readOnly
                    checked={isSelected}
                    id={value}
                />
                <label htmlFor={value}>{children}</label>
            </div>
        </components.Option>
    )
}
const IndicatorsContainer = () => <></>
const MultiValue = ({ index, getValue, ...props }) => {
    const maxToShow = 1
    const overflow = getValue()
        .slice(maxToShow)
        .map((x) => x.label)

    return index < maxToShow ? (
        <components.MultiValue {...props} />
    ) : index === maxToShow ? (
        <MoreSelectedBadge items={overflow} />
    ) : null
}

const MoreSelectedBadge = ({ items }) => {
    const style = {
        // marginLeft: 'auto',
        background: 'hsl(0, 0%, 90%)',
        borderRadius: '2px',
        fontSize: '85%',
        padding: '3px',
        // order: 99,
    }

    const title = items.join(', ')
    const length = items.length
    const label = `${length}+`

    return (
        <div style={style} title={title}>
            {label}
        </div>
    )
}
export default function SearchSelect({
    onSelectValue,
    initialData,
    isMulti,
    textLang,
    placeholder,
    isDesktop,
}) {
    const selectRef = useRef(null)
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

    const onBlur = (e) => {
        if (isMulti && onSelectValue) {
            onSelectValue(selectedOption)
        }
    }

    const onMenuClose = () => {
        selectRef.current.blur()
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: '#000',
            padding: 10,
            backgroundColor: 'transparent',
        }),
        control: (provided, state) => ({
            ...provided,
            border: 0,
            backgroundColor: '#fbfbfb',
            borderRadius: '12px',
            boxShadow: 'none',
            maxHeight: '38px',
            overflow: state.isMulti ? 'auto' : 'hidden',
        }),
        multiValue: (provided, state) => ({
            ...provided,
            maxWidth: '75%',
        }),
        // clearIndicator: (provided, state) => ({
        //     alignSelf: 'flex-start',
        //     margin: '8px',
        // }),
        // dropdownIndicator: (provided, state) => ({
        //     alignSelf: 'flex-start',
        //     margin: '8px',
        // }),
    }

    return (
        <>
            {isMulti && (
                <Select
                    ref={selectRef}
                    value={selectedOption}
                    onChange={handleChange}
                    options={initialData}
                    className={`search-select-container ${
                        isDesktop ? '' : 'is-mobile'
                    }`}
                    styles={customStyles}
                    isMulti={isMulti}
                    onBlur={onBlur}
                    closeMenuOnSelect={false}
                    // menuIsOpen={true}
                    noOptionsMessage={() => textLang['noOptions']}
                    onMenuClose={isMulti ? onMenuClose : () => {}}
                    hideSelectedOptions={false}
                    components={{
                        Option: CheckboxOption,
                        IndicatorsContainer: IndicatorsContainer,
                        MultiValue,
                    }}
                    blurInputOnSelect={false}
                    placeholder={placeholder}
                />
            )}
            {!isMulti && (
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={initialData}
                    className={`search-select-container ${
                        isDesktop ? '' : 'is-mobile'
                    }`}
                    styles={customStyles}
                    isMulti={isMulti}
                    onBlur={onBlur}
                    closeMenuOnSelect={true}
                    noOptionsMessage={() => textLang['noOptions']}
                    components={{
                        IndicatorsContainer: IndicatorsContainer,
                    }}
                    placeholder={placeholder}
                />
            )}
            <style jsx global>
                {styles}
            </style>
        </>
    )
}
