import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { setInteractionMode } from 'vee-validate'

extend('required', {
	...required,
	message: 'this field is required',
})

extend('email', {
	...email,
	message: 'email is not valid', // the error message
})

setInteractionMode('eager')
