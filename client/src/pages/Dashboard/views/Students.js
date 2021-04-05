import { Grid, makeStyles, Paper, Button } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import Card from '../components/panels/Card'
import Student from '../components/tables/Student'
import Title from '../components/Title'
import AddIcon from '@material-ui/icons/Add'
import StudentChart from '../components/panels/StudentChart'

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

function Students() {
	const classes = useStyles()
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4} lg={3}>
					<Paper className={fixedHeightPaper}>
						<Card />
					</Paper>
				</Grid>
				{/* Chart */}
				<Grid item xs={12} md={8} lg={9}>
					<Paper className={fixedHeightPaper}>
						<StudentChart />
					</Paper>
				</Grid>

				<Grid item container xs={12} display='flex' justify='flex-end'>
					<Button
						variant='contained'
						color='primary'
						size='small'
						startIcon={<AddIcon fontSize='small' />}
					>
						Add Student
					</Button>
				</Grid>

				{/* Enhanced Table */}
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Student />
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}

export default Students
