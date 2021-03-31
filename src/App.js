import { useDarkMode } from './hooks';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Lightning } from './icons';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  & > * + * {
    margin-top: 2.25rem;
  }
`;

const Header = styled.div`
  text-align: center;

  & > * + * {
    margin-top: 0.75rem;
  }

  & > p {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const StyledLightning = styled(Lightning)`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.25rem;
  flex-shrink: 0;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @media (min-width: 640px) {
    margin-bottom: 0rem;
    margin-right: 0.25rem;
  }
`;

const Note = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  padding: 1rem 1rem;
  background-color: #f4f4f5;
  border-radius: 0.5rem;
  max-width: 32rem;

  & > * + * {
    margin-top: 0.5rem;
  }

  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Link = styled.a`
  color: #3b82f6;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header>
          <Title>
            <StyledLightning />
            Jumpstart React
          </Title>
          <p>Now it's your turn. Build and style this application.</p>
        </Header>
        <Note>
          <p>
            If you need help, feel free to go to the{' '}
            <Link
              href="http://discord.gg/HTQvwxA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord server
            </Link>{' '}
            and ask the community.
          </p>
        </Note>
      </Layout>
    </>
  );
}

export default App;
