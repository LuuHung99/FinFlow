import { useState, useEffect, useRef, useMemo } from 'react';
import { IconBack, IconSend, IconLock, IconUser, IconCheck } from '../components/Icons';
import { FFButton } from '../components/FFButton';
import { FF_VIOLET, FF_INK, FF_FG2, FF_FG3 } from '../lib/constants';

function AuthShell({ children, subtitle, title, onBack }: {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  title: string;
  onBack?: () => void;
}) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#FAFAFA',
      display: 'flex', flexDirection: 'column', padding: '52px 24px 24px',
      overflowY: 'auto', overflowX: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -80, right: -60, width: 260, height: 260,
        background: 'radial-gradient(circle, rgba(124,58,237,.35), transparent 70%)',
        borderRadius: '50%', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 120, left: -80, width: 220, height: 220,
        background: 'radial-gradient(circle, rgba(255,107,157,.25), transparent 70%)',
        borderRadius: '50%', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {onBack && (
          <button onClick={onBack} style={{
            width: 40, height: 40, borderRadius: 20, border: '1px solid rgba(22,16,50,.08)',
            background: '#fff', color: FF_INK, display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', marginBottom: 12,
          }}><IconBack width={18} height={18} /></button>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: 'linear-gradient(135deg,#7C3AED,#FF6B9D)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
            boxShadow: '0 10px 24px rgba(124,58,237,.3)',
          }}>F</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: FF_INK, letterSpacing: '-.01em' }}>FinFlow</div>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: FF_INK, letterSpacing: '-.02em', lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: 14, color: FF_FG2, marginTop: 8, lineHeight: 1.5 }}>{subtitle}</div>
        <div style={{ marginTop: 26 }}>{children}</div>
      </div>
    </div>
  );
}

function FFInput({ label, value, onChange, type = 'text', placeholder, error, icon, right }: {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
}) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      {label && (
        <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: FF_FG2, display: 'block', marginBottom: 6 }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '14px 16px', borderRadius: 14,
        border: `1.5px solid ${error ? '#EF4444' : focus ? FF_VIOLET : 'rgba(22,16,50,.12)'}`,
        background: '#fff',
        boxShadow: focus ? '0 0 0 4px rgba(124,58,237,.15)' : 'none',
        transition: 'all 180ms cubic-bezier(.22,1,.36,1)',
      }}>
        {icon && <div style={{ color: focus ? FF_VIOLET : FF_FG3, display: 'flex' }}>{icon}</div>}
        <input
          value={value} onChange={onChange} type={type} placeholder={placeholder}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 0, outline: 0, background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 15, color: FF_INK,
          }}
        />
        {right}
      </div>
      {error && <div style={{ fontSize: 12, color: '#EF4444', marginTop: 6, fontWeight: 500 }}>{error}</div>}
    </div>
  );
}

// Login
export function LoginScreen({ onLogin, onSignup, onForgot }: {
  onLogin: () => void;
  onSignup: () => void;
  onForgot: () => void;
}) {
  const [email, setEmail] = useState('an@finflow.vn');
  const [password, setPassword] = useState('••••••••');
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setErr('');
    if (!email.includes('@')) { setErr('Email chưa hợp lệ nha'); return; }
    if (!password) { setErr('Nhập mật khẩu đi bạn'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 700);
  };

  return (
    <AuthShell title="Chào mừng trở lại 👋" subtitle="Đăng nhập để tiếp tục hành trình tài chính của bạn.">
      <FFInput label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="ten@email.com" icon={<IconSend width={18} height={18} />} />
      <FFInput label="Mật khẩu" type={showPw ? 'text' : 'password'} value={password}
        onChange={e => setPassword(e.target.value)} placeholder="••••••••"
        icon={<IconLock width={18} height={18} />} error={err}
        right={
          <button onClick={() => setShowPw(!showPw)} style={{
            background: 'transparent', border: 0, color: FF_FG3, cursor: 'pointer',
            fontSize: 12, fontFamily: 'var(--font-display)', fontWeight: 600,
          }}>{showPw ? 'Ẩn' : 'Hiện'}</button>
        }
      />
      <div style={{ textAlign: 'right', marginTop: -4, marginBottom: 18 }}>
        <button onClick={onForgot} style={{
          background: 'transparent', border: 0, color: FF_VIOLET,
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
        }}>Quên mật khẩu?</button>
      </div>
      <FFButton onClick={submit} disabled={loading}>
        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </FFButton>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(22,16,50,.08)' }} />
        <span style={{ fontSize: 12, color: FF_FG3, fontWeight: 500 }}>hoặc tiếp tục với</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(22,16,50,.08)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[
          { name: 'Google', label: 'G', color: '#EA4335' },
          { name: 'Apple', label: '', color: '#000', icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.86-3.08.38-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          )},
          { name: 'Facebook', label: 'f', color: '#1877F2' },
        ].map(s => (
          <button key={s.name} style={{
            padding: '14px 0', borderRadius: 14,
            border: '1.5px solid rgba(22,16,50,.1)', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: s.color, cursor: 'pointer',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
          }}>{s.icon || s.label}</button>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: FF_FG2 }}>
        Chưa có tài khoản?{' '}
        <button onClick={onSignup} style={{
          background: 'transparent', border: 0, color: FF_VIOLET,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, cursor: 'pointer',
        }}>Đăng ký ngay</button>
      </div>
    </AuthShell>
  );
}

// Signup
export function SignupScreen({ onSignup, onLogin, onBack }: {
  onSignup: (data?: { name: string; email: string }) => void;
  onLogin: () => void;
  onBack: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const pwStrength = useMemo(() => {
    if (!password) return 0;
    let s = 0;
    if (password.length >= 6) s++;
    if (password.length >= 10) s++;
    if (/\d/.test(password)) s++;
    if (/[A-Z]/.test(password) || /[^a-zA-Z0-9]/.test(password)) s++;
    return s;
  }, [password]);
  const pwLabel = ['', 'Yếu', 'Khá', 'Tốt', 'Mạnh'][pwStrength];
  const pwColor = ['#D6D4E0', '#EF4444', '#F59E0B', '#3DD9B3', '#16A34A'][pwStrength];

  const submit = () => {
    setErr('');
    if (!name.trim()) { setErr('Nhập tên của bạn nha'); return; }
    if (!email.includes('@')) { setErr('Email chưa hợp lệ'); return; }
    if (password.length < 6) { setErr('Mật khẩu cần ít nhất 6 ký tự'); return; }
    if (!agree) { setErr('Vui lòng đồng ý điều khoản'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onSignup({ name, email }); }, 700);
  };

  return (
    <AuthShell title="Tạo tài khoản FinFlow ✨" subtitle="Bắt đầu hành trình tài chính thông minh — miễn phí, luôn luôn." onBack={onBack}>
      <FFInput label="Tên của bạn" value={name} onChange={e => setName(e.target.value)} placeholder="VD: An Nguyễn" icon={<IconUser width={18} height={18} />} />
      <FFInput label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ten@email.com" icon={<IconSend width={18} height={18} />} />
      <FFInput label="Mật khẩu" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Ít nhất 6 ký tự" icon={<IconLock width={18} height={18} />} />

      {password && (
        <div style={{ marginTop: -6, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{
                flex: 1, height: 4, borderRadius: 2,
                background: i <= pwStrength ? pwColor : '#EDE4FF',
                transition: 'all 200ms',
              }} />
            ))}
          </div>
          <div style={{ fontSize: 11, color: pwColor, fontWeight: 600, marginTop: 6, fontFamily: 'var(--font-display)' }}>
            Độ mạnh: {pwLabel}
          </div>
        </div>
      )}

      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', marginBottom: 18 }}>
        <div onClick={() => setAgree(!agree)} style={{
          width: 20, height: 20, borderRadius: 6, marginTop: 1, flexShrink: 0,
          border: `1.5px solid ${agree ? FF_VIOLET : 'rgba(22,16,50,.2)'}`,
          background: agree ? FF_VIOLET : '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 180ms',
        }}>
          {agree && <IconCheck width={12} height={12} stroke="#fff" strokeWidth={3} />}
        </div>
        <div style={{ fontSize: 13, color: FF_FG2, lineHeight: 1.45 }} onClick={() => setAgree(!agree)}>
          Mình đồng ý với <b style={{ color: FF_VIOLET }}>Điều khoản</b> và <b style={{ color: FF_VIOLET }}>Chính sách bảo mật</b> của FinFlow
        </div>
      </label>

      {err && <div style={{ fontSize: 12, color: '#EF4444', marginBottom: 10, fontWeight: 500 }}>{err}</div>}

      <FFButton onClick={submit} disabled={loading}>
        {loading ? 'Đang tạo tài khoản...' : 'Đăng ký'}
      </FFButton>

      <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: FF_FG2 }}>
        Đã có tài khoản?{' '}
        <button onClick={onLogin} style={{
          background: 'transparent', border: 0, color: FF_VIOLET,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, cursor: 'pointer',
        }}>Đăng nhập</button>
      </div>
    </AuthShell>
  );
}

// Forgot Password (4-step flow)
export function ForgotScreen({ onBack, onSent }: {
  onBack: () => void;
  onSent: () => void;
}) {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'email' | 'otp' | 'reset' | 'done'>('email');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [countdown]);

  const sendEmail = () => {
    setErr('');
    if (!email.includes('@')) { setErr('Email chưa hợp lệ'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('otp'); setCountdown(60); }, 600);
  };

  const verifyOtp = () => {
    setErr('');
    if (otp.some(x => !x)) { setErr('Nhập đủ 4 số OTP nha'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('reset'); }, 500);
  };

  const resetPw = () => {
    setErr('');
    if (newPw.length < 6) { setErr('Mật khẩu cần ít nhất 6 ký tự'); return; }
    if (newPw !== confirmPw) { setErr('Mật khẩu không khớp'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('done'); }, 500);
  };

  const setOtpAt = (i: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...otp]; next[i] = v; setOtp(next);
    if (v && i < 3) otpRefs.current[i + 1]?.focus();
  };

  if (step === 'email') {
    return (
      <AuthShell title="Quên mật khẩu? 🔑" subtitle="Nhập email đăng ký, mình sẽ gửi mã xác thực để bạn đặt lại mật khẩu." onBack={onBack}>
        <FFInput label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ten@email.com" icon={<IconSend width={18} height={18} />} error={err} />
        <FFButton onClick={sendEmail} disabled={loading}>
          {loading ? 'Đang gửi...' : 'Gửi mã xác thực'}
        </FFButton>
        <div style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: FF_FG2 }}>
          Nhớ ra rồi?{' '}
          <button onClick={onBack} style={{ background: 'transparent', border: 0, color: FF_VIOLET, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Quay lại đăng nhập</button>
        </div>
      </AuthShell>
    );
  }

  if (step === 'otp') {
    return (
      <AuthShell title="Nhập mã OTP 📩" subtitle={<>Mình đã gửi mã 4 số tới <b style={{ color: FF_INK }}>{email}</b>. Kiểm tra hộp thư nha.</>} onBack={() => setStep('email')}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
          {otp.map((v, i) => (
            <input key={i} ref={el => { otpRefs.current[i] = el; }} value={v}
              onChange={e => setOtpAt(i, e.target.value)}
              onKeyDown={e => { if (e.key === 'Backspace' && !v && i > 0) otpRefs.current[i-1]?.focus(); }}
              maxLength={1}
              style={{
                width: 60, height: 68, borderRadius: 16, textAlign: 'center',
                border: `1.5px solid ${v ? FF_VIOLET : 'rgba(22,16,50,.12)'}`,
                background: v ? '#F6F2FF' : '#fff',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: FF_INK,
                outline: 0, transition: 'all 180ms',
                boxShadow: v ? '0 0 0 4px rgba(124,58,237,.12)' : 'none',
              }}
            />
          ))}
        </div>
        {err && <div style={{ fontSize: 12, color: '#EF4444', marginBottom: 10, fontWeight: 500, textAlign: 'center' }}>{err}</div>}
        <FFButton onClick={verifyOtp} disabled={loading}>{loading ? 'Đang xác thực...' : 'Xác nhận'}</FFButton>
        <div style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: FF_FG2 }}>
          Chưa nhận được mã?{' '}
          {countdown > 0 ? (
            <span style={{ color: FF_FG3, fontWeight: 600 }}>Gửi lại sau {countdown}s</span>
          ) : (
            <button onClick={() => { setOtp(['','','','']); setCountdown(60); }} style={{ background: 'transparent', border: 0, color: FF_VIOLET, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Gửi lại mã</button>
          )}
        </div>
        <div style={{ marginTop: 20, padding: 12, borderRadius: 12, background: '#FFF4D0', fontSize: 12, color: '#B45309', lineHeight: 1.5 }}>
          💡 Demo: nhập bất kỳ 4 số nào để tiếp tục
        </div>
      </AuthShell>
    );
  }

  if (step === 'reset') {
    return (
      <AuthShell title="Đặt lại mật khẩu 🔒" subtitle="Chọn mật khẩu mới để bảo vệ ví của bạn.">
        <FFInput label="Mật khẩu mới" type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="Ít nhất 6 ký tự" icon={<IconLock width={18} height={18} />} />
        <FFInput label="Xác nhận mật khẩu" type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="Nhập lại mật khẩu" icon={<IconLock width={18} height={18} />} error={err} />
        <FFButton onClick={resetPw} disabled={loading}>{loading ? 'Đang cập nhật...' : 'Đặt lại mật khẩu'}</FFButton>
      </AuthShell>
    );
  }

  // done
  return (
    <AuthShell title="Xong rồi! 🎉" subtitle="Mật khẩu đã được cập nhật. Bạn có thể đăng nhập lại ngay bây giờ.">
      <div style={{
        width: 120, height: 120, borderRadius: 60, margin: '20px auto',
        background: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 16px 40px rgba(61,217,179,.4)',
      }}>
        <IconCheck width={60} height={60} stroke="#fff" strokeWidth={3} />
      </div>
      <FFButton onClick={onSent}>Quay về đăng nhập</FFButton>
    </AuthShell>
  );
}
