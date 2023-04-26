import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LangSwitcher from 'components/LangSwitcher';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LangSwitcher position="absolute" />
      <Outlet />
    </Suspense>
  );
};

export default Layout;

// Компонент Outlet является частью библиотеки react-router-dom и используется для рендеринга соответствующего
// дочернего компонента на основе текущего URL. Он, по сути, является заполнителем для дочерних компонентов,
// которые определены в конфигурации маршрутизации.
// Свойство fallback компонента Suspense установлено на пользовательский компонент Loader,
// который будет отображаться во время загрузки дочерних компонентов.
// Это полезно для улучшения пользовательского опыта путем обеспечения визуальной обратной связи во время
// приложения.
// Использование компонента Suspense гарантирует, что страница будет отзывчивой и визуально привлекательной даже
// во время асинхронной загрузки контента.
