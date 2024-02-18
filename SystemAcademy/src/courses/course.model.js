import mongoose, { mongo } from 'mongoose'

const courseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

export default mongoose.model('course', courseSchema)