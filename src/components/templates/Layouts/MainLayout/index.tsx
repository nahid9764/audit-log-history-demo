import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

export const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<>
			<AppBar position="static">
				<Container>
					<Toolbar>
						<Typography variant="h5" style={{ margin: 'auto' }}>
							AMAG
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<Container>
				<>{children}</>
			</Container>
		</>
	);
};

interface PropsType {
	children?: ReactNode;
}
