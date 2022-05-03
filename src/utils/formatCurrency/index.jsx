import React from 'react'

export default function formatCurrency(monto) {
  return monto.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}