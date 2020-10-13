import { Alert, Spin } from 'antd';
import React, { FC } from 'react';

type Props = {
  error?: any | null;
}

const Loading : FC<Props> = ({error}) => {
  // const message = error? error : "Please waiting for a moment";
    return (
    <Spin tip="Loading...">
        <Alert
          message="Information"
          description={error? error : "Please waiting for a moment"}
          type={error? "error" :"info"}
        />
      </Spin>
    )
}

export default Loading;