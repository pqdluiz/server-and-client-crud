import React from 'react';
import { PageHeader } from 'antd';

export const Header: React.FC = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
);
