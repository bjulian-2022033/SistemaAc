'use strict'

import expres from 'express'

import{ deleteT, teacherSave, teacherUpdate, test } from './teacher.controller.js'

const api = expres.Router()

api.get('/test', test)
api.post('/teacherSave', teacherSave)
api.put('/teacherUpdate/:id', teacherUpdate)
api.delete('/deleteT/:id', deleteT)

export default api