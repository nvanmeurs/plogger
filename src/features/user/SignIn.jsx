import React from 'react';
import { Button, Form, Input } from 'antd';
import { signInUser } from './userSlice';
import { useDispatch } from 'react-redux';

export function SignIn() {
    const dispatch = useDispatch();
    const submit = (loginUser) => dispatch(signInUser(loginUser));

    return (
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} name="signInForm" onFinish={submit}>
            <Form.Item label="Email" name="email" rules={[{ required: true }, { type: 'email' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" htmlType="submit">
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    );
}
