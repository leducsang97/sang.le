import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

export default function IconButtons() {
	const classes = useStyles();
	const [openCopiedMessage, setOpenCopiedMessage] = useState(false);

	const copiedMessage = 'leducsang97@gmail.com';

	function handleCopy(state) {
		setOpenCopiedMessage(state);
	}
	function handleClose(event, reason) {
		if (reason === 'clickaway') {
			return;
		}
		setOpenCopiedMessage(false);
	}

	return (
		<div className={classes.root}>
			<a href="https://www.linkedin.com/in/sangdle/" target="blank">
				<IconButton aria-label="Linkedin">
					<LinkedInIcon />
				</IconButton>
			</a>
			<a href="https://github.com/leducsang97" target="blank">
				<IconButton aria-label="Github" disabled color="primary">
					<GitHubIcon />
				</IconButton>
			</a>
			<a href="https://www.linkedin.com/in/sangdle/" target="blank">
				<IconButton color="Link" aria-label="add an alarm">
					<LinkIcon />
				</IconButton>
			</a>
			<CopyToClipboard text={copiedMessage}>
				<IconButton color="Email" aria-label="copy to clipboard" onClick={() => handleCopy(true)}>
					<EmailIcon />
				</IconButton>
			</CopyToClipboard>
			{/* Copied Notificaiton */}
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				open={openCopiedMessage}
				autoHideDuration={100000}
				onClose={handleClose}
				ContentProps={{
					'aria-describedby': 'copied-hashtags-message'
				}}
				action={[
					<IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				]}>
				<SnackbarContent
					className={classes.copiedNotification}
					message={
						<span id="client-snackbar" className={classes.message}>
							Email copied
						</span>
					}
				/>
			</Snackbar>
		</div>
	);
}
