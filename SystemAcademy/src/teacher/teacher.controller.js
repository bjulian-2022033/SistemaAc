'use strict'

import { checkUpdate } from '../../utils/validator.js'
import Teacher from './teacher.model.js'


export const test = (req, res) => {
    return res.send('Hello word')
}

export const teacherSave = async (req, res) => {
    try {

        let data = req.body
        let teacher = new Teacher(data)
        await teacher.save()
        return res.send({ message: 'Registered successfully' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registered teacher' })
    }
}

export const teacherUpdate = async (req, res) => {
    try {

        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have sumbitted some data that cannot be updated or missing data' })
        let updateTeacher = await Teacher.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updateTeacher) return res.status(401).send({ message: 'Teacher not found and not updated' })
        return res.send({ message: 'Update Teacher', updateTeacher })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating teacher' })
    }
}

export const deleteT = async (req, res) => {
    try {

        let { id } = req.params
        let deleteTeacher = await Teacher.findOneAndDelete({ _id: id })
        if (!deleteTeacher) return res.status(404).send({ message: 'Teacher not fount and not delete' })
        return res.send({ message: 'Teacher delete successfully' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting Teacher' })

    }
}