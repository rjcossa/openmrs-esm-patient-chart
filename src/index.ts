import { getAsyncLifecycle, defineConfigSchema } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import { backendDependencies } from './openmrs-backend-dependencies';

const sharedOnlineOfflineProps = {
  online: {
    isLoginEnabled: true,
  },
  offline: {
    isLoginEnabled: false,
  },
};

function setupOpenMRS() {
  const moduleName = '@openmrs/esm-patient-hts-form-app';

  const options = {
    featureName: 'patient-hts-form',
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import('./root.component'), options),
        route: 'patients/hts/form',
        ...sharedOnlineOfflineProps,
      },
    ],
    extensions: [],
  };
}

export { backendDependencies, setupOpenMRS };
