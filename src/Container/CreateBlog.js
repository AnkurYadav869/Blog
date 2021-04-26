import React from 'react';
import Cards from '../Component/Cards';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
const CreateBlog = ({ blog }) => {
	return (
		<Container maxWidth='md'>
			<Grid container spacing={2}>
				{blog.map((det, i) => (
					<Grid item sm={4} xs={12} key={i}>
						<Cards content={det} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default CreateBlog;
