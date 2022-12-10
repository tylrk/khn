import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';


interface ChartComponentProps {
    data: any;
    colors: object;
  }

const ChartComponent: React.FC<ChartComponentProps> = (props: any) => {
	const {
		data,
		colors: {
			backgroundColor = 'black',
			lineColor = '#2962FF',
			textColor = 'white',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		},
	} = props;
	const chartContainerRef = useRef<HTMLDivElement>(null);

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
			};

			const chart = createChart(chartContainerRef.current!, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current!.clientWidth,
				height: 500,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div className='chart'
			ref={chartContainerRef}
		/>
	);
};



export default ChartComponent;