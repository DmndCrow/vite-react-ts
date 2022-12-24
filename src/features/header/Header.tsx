import { NavigationElement } from 'modules/Router';

function Header() {
  const navigationElements: NavigationElement[] = [
    {
      path: '/home',
      name: 'Home',
    },
    {
      path: '/settings',
      name: 'Settings',
    },
    {
      path: '/products',
      name: 'Products',
    },
  ];

  const navigationElement = (): JSX.Element => {
    return (
      <nav>
        <ul>
          {navigationElements.map((element, index) => (
            <li key={index}>
              <a href={element.path}>{element.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      {navigationElement()}
    </>
  )
}

export default Header;
