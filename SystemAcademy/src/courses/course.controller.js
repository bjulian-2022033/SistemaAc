'use strict'

import { checkUpdate } from '../../utils/validator.js'
import Course from './course.model.js'

export const test = (req, res) => {
    return res.send('Hello word')
}


export const courseSave = async (req, res) => {
    try {

        let data = req.body
        let course = new Course(data)
        await course.save()
        return res.send({ message: 'Registered successfully' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registered course' })

    }
}

export const get = async (req, res) => {
    try {

        let courses = await Course.find()
        return res.send({ courses })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting courses' })
    }
}

export const courseUpdate = async (req, res) => {
    try {

        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have sumbitted some data that cannot be updated or missing data' })
        let updateCourse = await Course.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updateCourse) return res.status(401).send({ message: 'Course not found and not updated' })
        return res.send({ message: 'Update Course', updateCourse })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating course' })
    }
}

export const deleteC = async (req, res) => {
    try {

        let { id } = req.params
        let deletedCourse = await Course.findOneAndDelete({ _id: id })
        if (!deletedCourse) return res.status(404).send({ message: 'Course not fount and not delete' })
        return res.send({ message: 'Course delete successfully' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting Course' })

    }
}