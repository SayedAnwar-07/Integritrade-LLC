'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/store'
import { startLoading, stopLoading } from '@/store/routeSlice'
import Image from 'next/image'
import logo from "@/public/logo-png.png"

export default function RouteLoader() {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.route.isLoading)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    dispatch(startLoading())
    const timer = setTimeout(() => dispatch(stopLoading()), 600)
    return () => clearTimeout(timer)
  }, [pathname, searchParams, dispatch])

  if (!isLoading) return null

  return (
    <>
      {/* Top progress bar */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '3px',
        zIndex: 9999,
        background: 'linear-gradient(90deg, #2aac61, #6ee0a0, #2aac61)',
        backgroundSize: '200% 100%',
        animation: 'progressBar 0.6s ease forwards, shimmer 1s linear infinite',
      }} />

      {/* Overlay bg */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        backgroundColor: 'rgba(0,0,0,0.45)',
        animation: 'fadeIn 0.15s ease',
      }} />

       {/* Pill */}
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            zIndex: 9999,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ffffff',
            border: '1.5px solid rgba(42,172,97,0.25)',
            borderRadius: '999px',
            padding: '8px 14px', 
            boxShadow: '0 2px 12px rgba(42,172,97,0.10)',
            animation: 'fadeIn 0.15s ease',
            whiteSpace: 'nowrap',
            }}>
            {/* Logo */}
            <Image
                src={logo}
                alt="Integritrade"
                height={20}
                style={{ display: 'block', objectFit: 'contain', flexShrink: 0 }}
            />

            {/* Text */}
            <span style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#1a7a44',
                textTransform: 'uppercase',
            }}>
                Integritrade
            </span>

            {/* Spinner */}
            <div style={{
                width: '16px', height: '16px',
                borderRadius: '50%',
                border: '2px solid rgba(42,172,97,0.2)',
                borderTopColor: '#2aac61',
                animation: 'spin 0.7s linear infinite',
                flexShrink: 0,            // 👈 prevents spinner squishing
            }} />
        </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </>
  )
}