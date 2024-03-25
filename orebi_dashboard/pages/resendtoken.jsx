import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Button, Checkbox, Form, Input, Alert, Space  } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"

function Resendtoken() {
    const [open, setOpen] = useState()
    const [loading, setloading] = useState(false)
    const resend_ref = useRef(null)

    const navigate = useNavigate()


    const params = useParams()
    console.log(params.token);


    useEffect(()=>{
        const click = (e)=>{
            if(!resend_ref.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.body.addEventListener('mousedown', click)
        return () =>{
            document.body.removeEventListener('mousedown', click)
        }
    }, [resend_ref])

    const handleOpen = ()=>{
        setOpen(true)
    }



    const onFinish = async (values) => {
        console.log('Success:', values);
        setloading(true)     
        const userData = await axios.post('http://localhost:3000/api/v1/auth/resendtokenverify', {
            email: values.email,
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
    <div className='resendtoken'>
        <div className='res_btn'>
            <button className='btn'  onClick={handleOpen}>Resend Email</button>
        </div>
            <div className={`${open ? 'popup' : "inactive"}`} ref={resend_ref}>
                <div className='res_email'>
                <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 300,
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
                </div>
            </div>
    </div>
  )
}

export default Resendtoken
