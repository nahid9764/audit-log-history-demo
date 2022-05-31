import type { NextPage } from 'next';
import { HomePage, MainLayout } from '../components/templates';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<HomePage />
		</MainLayout>
	);
};

export default Home;

