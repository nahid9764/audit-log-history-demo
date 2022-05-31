import { initialAuditLogErrors, initialAuditLogValues } from '@utils/constants';
import { formatValidatorKey, isNumber } from '@utils/helpers';

export const auditLogFormValidation = (
	values: Partial<typeof initialAuditLogValues>,
): Partial<typeof initialAuditLogErrors> => {
	const errors: Partial<typeof initialAuditLogErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const [key, value] of Object.entries(values)) {
			if (key in initialAuditLogErrors) {
				if (!value) {
					errors[key] = `${formatValidatorKey(key)} is required!`;
				} else {
					if ((key === 'latitude' || key === 'longitude') && !isNumber(String(value))) {
						errors[key] = `${formatValidatorKey(key)} should be a number!`;
					} else {
						errors[key] = null;
					}
				}
			}
		}
	}

	return errors;
};
