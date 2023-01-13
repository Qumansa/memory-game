import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';

import global from './styles/global.module.scss';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<main className={global.main}>
			<RouterProvider router={router} />
		</main>
	</React.StrictMode>
);
