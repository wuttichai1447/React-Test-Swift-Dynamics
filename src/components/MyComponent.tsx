import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('header.title')}</h1>
      <button>{t('button.moveShape')}</button>
      <button>{t('button.movePosition')}</button>
      <button>{t('button.randomPosition')}</button>
    </div>
  );
};

export default MyComponent;
