import { useContext } from 'react';
import Context from '../../context/Context';
import useJsonFetch from '../../assets/services/customHooks/useJsonFetch';
import ProductCard, { ProductCardProps } from '../Product/Card/Card';

import './TopSales.css';
import PreloadAndErrorControl from '../PreloadAndErrorControl/PreloadAndErrorControl';

export default function TopSales() {
	const { baseUrl } = useContext(Context);
	const { data, isLoading, hasError } = useJsonFetch<ProductCardProps[]>(baseUrl + '/api/top-sales');

	return (
		<>
			{data?.length !== 0 && (
				<section className='top-sales'>
					<h2 className='text-center'>Хиты продаж!</h2>
					<div className='row'>
						{data &&
							data.map((cardInfo) => (
								<ProductCard
									key={cardInfo.id}
									{...cardInfo}
								/>
							))}
					</div>
				</section>
			)}
			<PreloadAndErrorControl
				isLoading={isLoading}
				hasError={hasError}
			/>
		</>
	);
}
