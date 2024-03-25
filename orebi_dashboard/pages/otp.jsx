import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Alert, Space  } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"

function Otp() {
  const [loadings, setloadings] = useState(false)
  const [alerts, setAlerts] = useState('')

  const navigate = useNavigate()

  const params = useParams()

  const onFinish = async (values) => {
    console.log('Success:', values.otp);
    
  setloadings(true)

    const userData = await axios.post('http://localhost:3000/api/v1/auth/otpverify', {
        email: params.email,
        otp: values.otp
      },
    )
    setAlerts('Congratulations!')

    setTimeout(()=>{
      navigate('/login')
    }, 1000)
  };
    

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
        <Space direction="vertical" style={{ padding: '10px 15px', position: 'absolute', right:'15px' }}>
            {
              alerts && <Alert message={alerts} type="success" showIcon />
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
            label="OTP"
            name="otp"
            rules={[
              {
                required: true,
                message: 'Please input your OTP!',
              },
            ]}
          >
            <Input />
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
            <Button type="primary" htmlType="submit" loading={loadings} disabled={loadings}>
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default Otp
