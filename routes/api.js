// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')

router.get('/:resouce', (req, res) => {
	const resouce = req.params.resouce
	const controller = controllers[resouce]

	let filters = req.query

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.get(filters)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: "the " + id + " is invalid!"
		})
		return 
	}

	controller.getById(id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: "Invalid Resource!"
		})
		return
	}

	controller.post(req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.put('/:resource/:id',(req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: "Invalid Resource!"
		})
		return
	}
	
	controller.put(req.body, id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.delete('/:resource/:id',(req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: "Invalid Resource!"
		})
		return
	}

	controller.delete(id)
	.then(data => {
		res.json({
			confirmation: 'Success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router