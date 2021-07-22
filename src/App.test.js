import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => { // test는 Jest의 함수이고 it 함수와 같은 역할을 한다!
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('<App />', () => {
  it('renders component correctly', () => {
    const {container} = render(<App/>);
    expect(container.getElementsByClassName('App-logo')).toHaveLength(1);
    expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute(
        'src', 'logo.svg'
    )

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

})
