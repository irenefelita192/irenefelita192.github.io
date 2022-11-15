import { parse } from 'date-fns'
export const getAge = (dateString) => {
    if (dateString) {
        let today = new Date(),
            birthDate = new Date(parse(dateString, 'dd/MM/yyyy', new Date())),
            age = today.getFullYear() - birthDate.getFullYear(),
            m = today.getMonth() - birthDate.getMonth()
        console.log('birthDate', birthDate)
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    return ''
}
