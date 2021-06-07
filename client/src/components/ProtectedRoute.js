import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

<<<<<<< HEAD
const mapStateToProps = state => ({
	user: state.user.data,
	isAuthenticated: state.user.isAuthenticated,
	isLoading: state.user.isLoading
})

const mapDispatchToProps = {}

=======
>>>>>>> 5d0d5be93a043dca6dc2ab83f205c743ae635079
const ProtectedRoute = ({
	component: Component,
	isAuthenticated,
	role,
	user,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props => {
<<<<<<< HEAD
				return isAuthenticated && role.includes(user.role) ? (
=======
				return isAuthenticated && role === 'student' ? (
>>>>>>> 5d0d5be93a043dca6dc2ab83f205c743ae635079
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/', state: { from: props.location } }}
					/>
				)
			}}
		/>
	)
}

<<<<<<< HEAD
=======
const mapStateToProps = state => ({
	role: state.user.data.role,
	isAuthenticated: state.user.isAuthenticated,
	isLoading: state.user.isLoading
})

const mapDispatchToProps = {}

>>>>>>> 5d0d5be93a043dca6dc2ab83f205c743ae635079
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)
