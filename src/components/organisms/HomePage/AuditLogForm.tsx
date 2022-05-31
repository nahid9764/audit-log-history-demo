import { useForm } from '@libs/hooks/useForm';
import Icon, { cancel, save } from '@libs/icons';
import { auditLogFormValidation } from '@libs/validations';
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import { addLog, getLogsState } from '@store/auditLog/log.slice';
import { initialAuditLogErrors, initialAuditLogValues } from '@utils/constants';
import { formatDate } from '@utils/helpers';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const AuditLogForm: FC = () => {
	const { data } = useSelector(getLogsState);
	const dispatch = useDispatch();

	const handleSaveInfo = () => {
		const payload = {
			siteId: '01',
			userName: 'Simon',
			...values,
			time: new Date().toISOString(),
		};

		//  Instead of dispatch func, API call will go here with trycatch block
		dispatch(addLog(payload));

		// if success
		setValues(initialAuditLogValues);
		setErrors(initialAuditLogErrors);
	};

	const handleCancel = () => {
		setValues(initialAuditLogValues);
		setErrors(initialAuditLogErrors);
	};

	const { values, errors, handleSubmit, handleChange, setValues, setErrors } = useForm({
		initialValues: initialAuditLogValues,
		initialErrors: initialAuditLogErrors,
		validate: auditLogFormValidation,
		onCallback: handleSaveInfo,
	});

	return (
		<CardWrapper>
			<CardContent>
				<form noValidate onSubmit={handleSubmit}>
					<div className="btn-cont">
						<Button variant="outlined" size="medium" color="primary" type="submit">
							<Icon path={save} fill="#3f51b5" /> Save
						</Button>
						<Button
							variant="outlined"
							size="medium"
							style={{ marginLeft: '10px' }}
							type="reset"
							onClick={handleCancel}
						>
							<Icon path={cancel} /> Cancel
						</Button>
					</div>

					<Typography>Site Id: 1</Typography>

					<TextField
						fullWidth
						className="TextField"
						variant="outlined"
						label="Name"
						placeholder="Name"
						name="name"
						onChange={handleChange}
						error={!!errors.name}
						value={values.name}
						helperText={errors.name}
						required
					/>

					<TextField
						fullWidth
						variant="outlined"
						className="TextField"
						label="Jurisdiction / City / Region"
						placeholder="Jurisdiction / City / Region"
						name="region"
						onChange={handleChange}
						error={!!errors.region}
						value={values.region}
						helperText={errors.region}
						required
					/>

					<TextField
						fullWidth
						variant="outlined"
						className="TextField"
						label="Site Description"
						placeholder="Site Description"
						name="siteDescription"
						onChange={handleChange}
						error={!!errors.siteDescription}
						value={values.siteDescription}
						helperText={errors.siteDescription}
						required
					/>

					<TextField
						variant="outlined"
						className="TextField"
						label="Latitude"
						placeholder="Latitude"
						name="latitude"
						onChange={handleChange}
						error={!!errors.latitude}
						value={values.latitude}
						helperText={errors.latitude}
						required
					/>

					<TextField
						variant="outlined"
						className="TextField"
						label="Longitude"
						placeholder="Longitude"
						name="longitude"
						onChange={handleChange}
						error={!!errors.longitude}
						value={values.longitude}
						helperText={errors.longitude}
						required
					/>
				</form>

				<div className="audit-log">
					<p className="title">Audit Log:</p>
					{data.length > 0 ? (
						data.map((el, i) => (
							<p className="history" key={i}>
								{i > 0 ? 'Updated' : 'Created'} by {el.userName} on {formatDate(el.time)}
							</p>
						))
					) : (
						<p>No log history found!</p>
					)}
				</div>
			</CardContent>
		</CardWrapper>
	);
};

const CardWrapper = styled(Card)`
	max-width: 700px;
	margin: 50px auto;

	.btn-cont {
		margin: 10px;
		padding-bottom: 20px;
		border-bottom: 1px solid var(--border);
	}

	.TextField {
		margin: 10px;
	}

	.audit-log {
		padding: 1.5rem;
		background-color: var(--border);

		.title {
			border-bottom: 1px solid var(--light-gray);
		}

		.history {
			margin: 0;
		}
	}
`;
