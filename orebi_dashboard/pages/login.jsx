import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Alert, Space  } from 'antd';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate= useNavigate()

  const onFinish = async (values) => {
    console.log('Success:', values);

    const userData = await axios.post('http://localhost:3000/api/v1/auth/login', {
      email: values.email,
      password: values.password
    },
    )
    setTimeout(()=> {
      navigate('/home')
    }, 1000)
  };


  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" loading={false} disabled={false}>
                Submit
              </Button>
            </Form.Item>
          </Form>
    </div>
  )
}

export default Login
