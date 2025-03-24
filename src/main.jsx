import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router';
import 'animate.css';
import { HashRouter } from 'react-router';

createRoot( document.getElementById( 'root' ) ).render(
	<StrictMode>
		<HashRouter>
			<HeroesApp />
		</HashRouter>
	</StrictMode>,
);
