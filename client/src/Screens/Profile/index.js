import React, { Fragment, Component } from 'react';
import NavBarProfile from '../../Components/NavBarProfile';
import Collapsible from '../../Components/Collapsible';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './style';
import { animateScroll as scroll, Events } from 'react-scroll';
import Content from '../../Content/firstPage';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IconButton } from '@material-ui/core';

class Profile extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		Events.scrollEvent.register('begin', function () {
			console.log('begin', arguments);
		});

		Events.scrollEvent.register('end', function () {
			console.log('end', arguments);
		});
		return this.setState({ data: Content() });
	}
	updateState = () => {
		return this.setState({ data: Content() });
	};
	scrollToTop = () => {
		scroll.scrollToTop();
	};

	handleClickOpen = (id) => (event) => {
		// if (id === 1) props.history.push('/user/:userid/personal-info');
		console.log(this.props, id);
		event.preventDefault();
	};

	render() {
		const { classes } = this.props;
		console.log(this.state);
		return (
			<Grid>
				<NavBarProfile />
				<Grid className={classes.pageContent}>
					<Typography color="primary" className={classes.welcome}>
						Welcome Nicole! Please follow the steps below in order to fill your
						application
					</Typography>

					<Grid className={classes.collapseContainer}>
						{this.state.data.map((data, index) => {
							return (
								<Collapsible
									key={index}
									header={data.header}
									body={data.body}
									id={data.id}
									onClick={this.handleClickOpen}
								/>
							);
						})}
					</Grid>
					<Grid className={classes.bottom}>
						<img
							src={require('./tree.png')}
							alt="tree pic"
							className={classes.treeImage}
						/>
						<IconButton
							color="secondary"
							aria-label="up"
							className={classes.iconBtn}
							onClick={this.scrollToTop}
						>
							<ExpandLessIcon className={classes.upBtn} />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(style)(Profile);
