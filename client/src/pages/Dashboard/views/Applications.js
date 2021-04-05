import { Grid, makeStyles, Paper, Button, Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import Card from '../components/panels/Card'
import PendingApplicationsTable from '../components/PendingApplicationsTable'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}))

function Applications() {
	const classes = useStyles()
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
	return (
		<>
			<Grid container spacing={3}>
				{/* Enhanced Table */}
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography
							component='h2'
							variant='h6'
							color='primary'
							gutterBottom
						>
							Pending Applications
						</Typography>
						<PendingApplicationsTable />
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}

export default Applications
