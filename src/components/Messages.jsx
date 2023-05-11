import React, { useEffect, useState } from 'react';
import AuthUser from './PrivateRoute/AuthUser';
import BeatLoaderSpinner from './reactSpinners/BeatLoaderSpinner';
import { Pagination, usePagination } from 'pagination-react-js';

export default function Messages() {
	const { http } = AuthUser();
	const [messages, setmessages] = useState();
	const { currentPage, entriesPerPage, entries } = usePagination(1, 6);

	const getmessages = async () => {
		const urlmessages = await http.get('/messages');
		setmessages(urlmessages.data);
		console.log(urlmessages.data);
	};
	useEffect(() => {
		getmessages();
	}, []);
	return (
		<>
			{!messages ? (
				<BeatLoaderSpinner height="80vh" />
			) : (
				<>
					<div className="col-span-12 ">
                    <h1 className="text-xl ml-3 ">Messages List </h1>
                    </div>
					<div className="grid grid-cols-3 gap-4 mt-6">
						{messages &&
							messages
								.slice(entries.indexOfFirst, entries.indexOfLast)
								.map((message) => (
									<div
										key={message.id}
										className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
									>
										<h5 className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
											{message.name}
										</h5>
										<h5 className="text-xs  text-gray-500 mb-2">
											{message.email}
										</h5>
										<p className="mb-4  text-base text-neutral-600 dark:text-neutral-200">
											{message.message}
										</p>
									</div>
								))}
					</div>
					<div className="col-span-12 mt-10">
						<Pagination
							entriesPerPage={entriesPerPage.get}
							totalEntries={messages.length}
							currentPage={{ get: currentPage.get, set: currentPage.set }}
							offset={1}
							classNames={{
								wrapper: 'flex m-auto justify-center   select-none rounded-md',
								item: 'p-1 w-7 flex justify-center bg-white items-center border-2 m-1 text-sm hover:cursor-pointer hover:bg-sky-700 hover:text-white rounded-md',
								itemActive:
									'p-1 w-7 flex bg-sky-700  justify-center items-center border-2 m-1 text-sm  rounded-md',
								navPrev:
									'p-1 w-7 flex bg-white justify-center items-center border-2 m-1 text-sm hover:cursor-pointer hover:bg-sky-700 hover:text-white rounded-md',
								navNext:
									'p-1 w-7 flex bg-white justify-center items-center border-2 m-1 text-sm hover:cursor-pointer hover:bg-sky-700 hover:text-white rounded-md',
								navStart:
									'p-1 w-7 hidden flex justify-center items-center border-2 m-1 text-sm hover:cursor-pointer hover:bg-sky-700 hover:text-white rounded-md',
								navEnd:
									'p-1 w-7 flex  hidden justify-center items-center border-2 m-1 text-sm hover:cursor-pointer hover:bg-sky-700 hover:text-white rounded-md',
								navPrevCustom:
									'p-1 border-2  m-1 flex justify-center items-center rounded-md hover:cursor-pointer hover:bg-sky-700 hover:text-white',
								navNextCustom:
									'p-1 border-2 m-1  flex justify-center items-center rounded-md hover:cursor-pointer hover:bg-sky-700 hover:text-white',
							}}
							showFirstNumberAlways={true}
							showLastNumberAlways={true}
							navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
							navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
							navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
							navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
							navPrevCustom={{
								steps: 5,
								content:
									'\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
							}}
							navNextCustom={{
								steps: 5,
								content:
									'\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
							}}
						/>
					</div>
				</>
			)}
		</>
	);
}
