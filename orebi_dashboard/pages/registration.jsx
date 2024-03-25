import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Alert, Space  } from 'antd';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import './style.css'

function Registration() {
  const [loading, setloading] = useState(false)
  const [alert, setAlert] = useState('')

  const navigate = useNavigate()

  const onFinish = async (values) => {
    console.log('Success:', values);
    setloading(true)

   const userData = await axios.post('http://localhost:3000/api/v1/auth/reg', {
      name: values.username,
      email: values.email,
      password: values.password
    },

    {
      headers: {
        Authorization: 'oeY$M81N0*{K'
      }
    }
    )
    setAlert('Registration Successful. Please check your email for token')
    setloading(false)
    // setTimeout(()=> {
    //     navigate(`/otp/${values.email}`)
    // }, 1000)
  };



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
        <Space direction="vertical" style={{maxWidth: '500px', padding: '10px 15px', position: 'absolute', right:'15px' }}>
          {
            alert && <Alert message={alert} type="success" showIcon />
          }
        </Space>
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

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
          <Button type="primary" htmlType="submit" loading={loading} disabled={false}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className='token'>
        <p>If you don't get a token link so <a href='/resendtoken'>Click Here</a></p>
      </div>
    </div>
  )
}

export default Registration
