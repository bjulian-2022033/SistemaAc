'use strict'

import expres from 'express'

import  {courseSave, courseUpdate, deleteC, test } from './course.controller.js'

const api = expres.Router()

api.get('/test', test)
api.post('/courseSave', courseSave)
api.put('/courseUpdate/:id', courseUpdate)
api.delete('/deleteC/:id', deleteC)


export default api