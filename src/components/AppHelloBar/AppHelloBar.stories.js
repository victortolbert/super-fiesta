import AppHelloBar from './AppHelloBar.vue'
import data from '../../../public/data.json';

export default {
  title: 'AppHelloBar',
}

export const isDefault = () => ({
  render: h => <AppHelloBar />,
});

// export const withData = () => ({
//   render: h => <pre>{JSON.stringify(data, null, 2)}</pre>,
// });
