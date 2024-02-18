import mongoose, { mongo } from 'mongoose'

const teacherSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

export default mongoose.model('teacher', teacherSchema)