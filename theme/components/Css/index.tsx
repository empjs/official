import { ProgressBar } from "../Benchmark/ProgressBar";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const ProgressItem = ({ name, max, value }: any) => {
	return (
		<div className="flex flex-center justify-start m-4 flex-col sm:flex-row">
			<>
				<p className="mr-2 mb-2 w-20 text-center text-gray-500 dark:text-light-500">
					{name}
				</p>
				<ProgressBar value={value} max={max} />
			</>
		</div>
	);
};
const SassModern = () => {
	return (
		<div className="flex flex-col items-center my-4 z-1">
			<h2 className="font-bold text-2xl sm:text-4xl">
				基于 Sass Modern Mode 构建提升 46.7%
			</h2>
			<ProgressItem name="Modern Mode" value={7.57} max={14.2} />
			<ProgressItem name="Default Mode" value={14.2} max={14.2} />
		</div>
	);
};
export default SassModern;
