// src/api/axiosInstance.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'; // 환경 변수 활용

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 요청 타임아웃 5초
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('token')}` // 로그인 토큰 추가 예시
  }
});

axiosInstance.interceptors.request.use(
  config => {
        // console.log(config);
    // 요청이 보내지기 전에 수행할 작업 (예: 인증 토큰 동적으로 추가)
    // const token = localStorage.getItem('accessToken'); // 예시: 로컬 스토리지에서 토큰 가져오기
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (선택 사항)
axiosInstance.interceptors.response.use(
  response => {
    // 응답 데이터가 있는 경우 수행할 작업
    return response;
  },
  error => {
    // 응답 오류 처리 (예: 401 Unauthorized 시 로그인 페이지로 리다이렉트)
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized request, redirecting to login...');
      // window.location.href = '/login'; // 실제 리다이렉트 로직
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;