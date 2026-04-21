import { useState, useRef } from "react";
import {
  IconBack,
  IconEdit,
  IconUser,
  IconSend,
  IconPay,
  IconCalendar,
  IconLock,
  IconBell,
  IconTarget,
  IconSparkle,
  IconZap,
  IconGift,
  IconPlus,
  IconTrash,
  IconChart,
  IconSearch,
  IconChevronDown,
  IconChevronRight,
  IconFaceId,
  IconSettings,
  IconHelp,
  IconHeart,
} from "../components/Icons";
import { FFButton } from "../components/FFButton";
import { fmtVND } from "../lib/format";
import {
  FF_VIOLET,
  FF_CORAL,
  FF_MINT,
  FF_INK,
  FF_FG2,
  FF_FG3,
  FF_BG,
  FF_WELL,
} from "../lib/constants";

function SubHeader({
  title,
  onBack,
  right,
}: {
  title: string;
  onBack: () => void;
  right?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "52px 20px 12px",
      }}
    >
      <button
        onClick={onBack}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          border: "1px solid rgba(22,16,50,.08)",
          background: "#fff",
          color: FF_INK,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <IconBack width={18} height={18} />
      </button>
      <div
        style={{
          flex: 1,
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 18,
          color: FF_INK,
        }}
      >
        {title}
      </div>
      {right}
    </div>
  );
}

function Section({
  children,
  title,
  padding = 20,
}: {
  children: React.ReactNode;
  title?: string;
  padding?: number;
}) {
  return (
    <div style={{ padding: `8px ${padding}px 0` }}>
      {title && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: FF_FG3,
            margin: "14px 4px 8px",
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          border: "1px solid rgba(22,16,50,.06)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Row({
  icon: IconCmp,
  label,
  detail,
  right,
  onClick,
  danger,
  isFirst,
}: {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  detail?: string;
  right?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  isFirst?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        borderTop: isFirst ? "none" : "1px solid rgba(22,16,50,.06)",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {IconCmp && (
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: danger ? "#FFE4E4" : FF_WELL,
            color: danger ? FF_CORAL : FF_VIOLET,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconCmp width={16} height={16} />
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 14,
            color: danger ? FF_CORAL : FF_INK,
          }}
        >
          {label}
        </div>
        {detail && (
          <div style={{ fontSize: 12, color: FF_FG3, marginTop: 2 }}>
            {detail}
          </div>
        )}
      </div>
      {right ||
        (onClick && (
          <IconChevronRight width={14} height={14} stroke={FF_FG3} />
        ))}
    </div>
  );
}

function Switch({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!on)}
      style={{
        width: 44,
        height: 26,
        borderRadius: 999,
        border: 0,
        background: on ? FF_VIOLET : "#D6D4E0",
        position: "relative",
        cursor: "pointer",
        transition: "all 220ms cubic-bezier(.22,1,.36,1)",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          ...(on ? { right: 3 } : { left: 3 }),
          width: 20,
          height: 20,
          borderRadius: 10,
          background: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,.2)",
        }}
      />
    </button>
  );
}

// Edit Profile
export function EditProfileScreen({ onBack }: { onBack: () => void }) {
  const [name, setName] = useState("An Nguyễn");
  const [email, setEmail] = useState("an@finflow.vn");
  const [phone, setPhone] = useState("+84 912 345 678");
  const [dob, setDob] = useState("15/03/2001");

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
      <SubHeader
        title="Thông tin cá nhân"
        onBack={onBack}
        right={
          <button
            onClick={onBack}
            style={{
              background: "transparent",
              border: 0,
              color: FF_VIOLET,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Lưu
          </button>
        }
      />
      <div style={{ textAlign: "center", padding: "8px 20px 20px" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              background: "linear-gradient(135deg,#FFC93C,#FF6B6B)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 40,
              boxShadow: "0 12px 28px rgba(255,107,107,.3)",
            }}
          >
            A
          </div>
          <button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 32,
              height: 32,
              borderRadius: 16,
              border: "3px solid #FAFAFA",
              background: FF_VIOLET,
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconEdit width={14} height={14} />
          </button>
        </div>
      </div>
      <Section title="Thông tin cơ bản">
        {[
          { label: "Họ tên", value: name, set: setName, icon: IconUser },
          { label: "Email", value: email, set: setEmail, icon: IconSend },
          {
            label: "Số điện thoại",
            value: phone,
            set: setPhone,
            icon: IconPay,
          },
          { label: "Ngày sinh", value: dob, set: setDob, icon: IconCalendar },
        ].map((f, i) => (
          <div
            key={f.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 16px",
              borderTop: i ? "1px solid rgba(22,16,50,.06)" : "none",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: FF_WELL,
                color: FF_VIOLET,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <f.icon width={16} height={16} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: FF_FG3, marginBottom: 2 }}>
                {f.label}
              </div>
              <input
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                style={{
                  border: 0,
                  outline: 0,
                  width: "100%",
                  background: "transparent",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: FF_INK,
                }}
              />
            </div>
          </div>
        ))}
      </Section>
      <Section title="Tiền tệ & ngôn ngữ">
        <Row
          label="Đơn vị tiền tệ"
          detail="VND (₫)"
          onClick={() => {}}
          isFirst
        />
        <Row label="Ngôn ngữ" detail="Tiếng Việt" onClick={() => {}} />
        <Row label="Múi giờ" detail="GMT+7 — Hà Nội" onClick={() => {}} />
      </Section>
      <div style={{ padding: 20 }}>
        <FFButton onClick={onBack}>Lưu thay đổi</FFButton>
      </div>
    </div>
  );
}

// Linked Accounts (simplified — no detail/add modal for brevity)
interface Account {
  name: string;
  type: string;
  last: string;
  full: string;
  balance: number;
  color: string;
  emoji: string;
  holder: string;
  branch: string;
  swift: string;
  opened: string;
  status: string;
  limit?: number;
  photo?: string | null;
}

export function LinkedAccountsScreen({ onBack }: { onBack: () => void }) {
  const defaultAccounts: Account[] = [
    {
      name: "Techcombank",
      type: "Ngân hàng",
      last: "***3456",
      full: "1903 7654 8823 3456",
      balance: 14200000,
      color: "#E70014",
      emoji: "🏦",
      holder: "NGUYEN VAN AN",
      branch: "Chi nhánh Hà Nội",
      swift: "VTCBVNVX",
      opened: "12/08/2022",
      status: "Hoạt động",
    },
    {
      name: "Vietcombank",
      type: "Ngân hàng",
      last: "***8821",
      full: "0011 0042 1938 8821",
      balance: 3100000,
      color: "#007B47",
      emoji: "🏦",
      holder: "NGUYEN VAN AN",
      branch: "Chi nhánh Cầu Giấy",
      swift: "BFTVVNVX",
      opened: "03/01/2020",
      status: "Hoạt động",
    },
    {
      name: "MoMo",
      type: "Ví điện tử",
      last: "0912***678",
      full: "0912 345 678",
      balance: 850000,
      color: "#A50064",
      emoji: "💜",
      holder: "An Nguyễn",
      branch: "Ví điện tử liên kết",
      swift: "—",
      opened: "21/11/2023",
      status: "Đã xác thực",
    },
    {
      name: "Visa Platinum",
      type: "Thẻ tín dụng",
      last: "***4455",
      full: "4532 1234 5678 4455",
      balance: -2100000,
      color: "#1A1F71",
      emoji: "💳",
      holder: "AN NGUYEN",
      branch: "Techcombank — Visa",
      swift: "—",
      opened: "15/06/2024",
      status: "Đang hoạt động",
      limit: 50000000,
    },
  ];
  const [accounts, setAccounts] = useState<Account[]>(defaultAccounts);
  const [showAdd, setShowAdd] = useState(false);
  const [detail, setDetail] = useState<Account | null>(null);
  const [copied, setCopied] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  if (detail) {
    const copyAcct = () => {
      try {
        navigator.clipboard?.writeText(detail.full.replace(/\s/g, ""));
      } catch {
        /* noop */
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
    const showQr = () => setQrOpen(true);
    return (
      <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
        <SubHeader title="Chi tiết tài khoản" onBack={() => setDetail(null)} />
        <div style={{ padding: "0 20px" }}>
          <div
            style={{
              padding: "22px 22px 28px",
              borderRadius: 22,
              background: `linear-gradient(135deg, ${detail.color}, ${detail.color}CC 60%, #16102F)`,
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 18px 40px ${detail.color}55`,
              minHeight: 190,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 160,
                height: 160,
                background: "rgba(255,255,255,.12)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -50,
                left: -30,
                width: 120,
                height: 120,
                background: "rgba(255,255,255,.08)",
                borderRadius: "50%",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    opacity: 0.85,
                  }}
                >
                  {detail.type}
                </div>
                <div style={{ fontSize: 28 }}>{detail.emoji}</div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 22,
                  marginTop: 6,
                  letterSpacing: "-.01em",
                }}
              >
                {detail.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                  marginTop: 20,
                  letterSpacing: ".08em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {detail.full}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginTop: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      opacity: 0.75,
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                    }}
                  >
                    Chủ tài khoản
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 14,
                      marginTop: 2,
                    }}
                  >
                    {detail.holder}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 10,
                      opacity: 0.75,
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                    }}
                  >
                    Số dư
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 16,
                      marginTop: 2,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {detail.balance < 0 ? "-" : ""}
                    {fmtVND(Math.abs(detail.balance))} ₫
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 10,
              marginTop: 18,
            }}
          >
            {[
              { label: "Chép STK", icon: "📋", on: copyAcct },
              { label: "Chuyển", icon: "↗️" },
              { label: "Nạp", icon: "⬇️" },
              { label: "QR", icon: "▦", on: showQr },
            ].map((a) => (
              <button
                key={a.label}
                onClick={a.on}
                style={{
                  padding: "12px 4px",
                  borderRadius: 14,
                  background: "#fff",
                  border: "1px solid rgba(22,16,50,.06)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 20 }}>{a.icon}</div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 11,
                    color: FF_INK,
                  }}
                >
                  {a.label}
                </div>
              </button>
            ))}
          </div>
          {copied && (
            <div
              style={{
                textAlign: "center",
                color: FF_MINT,
                fontSize: 12,
                fontWeight: 600,
                marginTop: 8,
              }}
            >
              ✓ Đã sao chép số tài khoản
            </div>
          )}

          <Section title="Thông tin ngân hàng" padding={0}>
            <Row label="Tên ngân hàng" detail={detail.name} isFirst />
            <Row label="Chi nhánh" detail={detail.branch} />
            <Row label="Mã SWIFT / BIN" detail={detail.swift} />
            <Row label="Ngày liên kết" detail={detail.opened} />
            <Row
              label="Trạng thái"
              detail={detail.status}
              right={
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 999,
                    background: "#E7FBF5",
                    color: FF_MINT,
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  ● {detail.status}
                </span>
              }
            />
            {detail.limit && (
              <Row label="Hạn mức" detail={`${fmtVND(detail.limit)} ₫`} />
            )}
          </Section>

          <Section title="Gần đây" padding={0}>
            {[
              {
                name: "Chuyển khoản tới Mai",
                amount: -500000,
                time: "Hôm nay · 14:30",
              },
              {
                name: "Lương tháng 4",
                amount: 18000000,
                time: "Hôm qua · 09:02",
              },
              {
                name: "Thanh toán hóa đơn",
                amount: -340000,
                time: "19/04 · 18:22",
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderTop: i ? "1px solid rgba(22,16,50,.06)" : "none",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: FF_INK,
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11, color: FF_FG3, marginTop: 2 }}>
                    {t.time}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: t.amount < 0 ? FF_CORAL : FF_MINT,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {t.amount < 0 ? "-" : "+"}
                  {fmtVND(Math.abs(t.amount))} ₫
                </div>
              </div>
            ))}
          </Section>

          <Section title="Quản lý" padding={0}>
            <Row
              icon={IconBell}
              label="Thông báo giao dịch"
              right={
                <Switch
                  on={true}
                  onChange={() => {
                    /* noop */
                  }}
                />
              }
              isFirst
            />
            <Row
              icon={IconEdit}
              label="Đổi tên hiển thị"
              onClick={() => {
                /* noop */
              }}
            />
            <Row
              icon={IconTrash}
              label="Gỡ liên kết tài khoản này"
              danger
              onClick={() => {
                setAccounts(accounts.filter((a) => a.name !== detail.name));
                setDetail(null);
              }}
            />
          </Section>
        </div>

        {qrOpen && (
          <div
            onClick={() => setQrOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(22,16,50,.85)",
              zIndex: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              animation: "ff-fade 220ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 320,
                background: "#fff",
                borderRadius: 28,
                padding: 24,
                textAlign: "center",
                position: "relative",
                boxShadow: "0 24px 60px rgba(0,0,0,.4)",
              }}
            >
              <button
                onClick={() => setQrOpen(false)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  border: 0,
                  background: "#F3F1FA",
                  color: FF_INK,
                  cursor: "pointer",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                ×
              </button>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: FF_INK,
                  marginBottom: 4,
                }}
              >
                {detail.name}
              </div>
              <div style={{ fontSize: 12, color: FF_FG3, marginBottom: 18 }}>
                {detail.holder}
              </div>

              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: 20,
                  background: detail.photo ? "#000" : FF_WELL,
                  overflow: "hidden",
                  position: "relative",
                  border: `3px solid ${detail.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {detail.photo ? (
                  <img
                    src={detail.photo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{ textAlign: "center", color: FF_FG3, padding: 20 }}
                  >
                    <div style={{ fontSize: 42, marginBottom: 8 }}>🖼️</div>
                    <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                      Chưa có ảnh cho tài khoản này.
                      <br />
                      Thêm tài khoản mới để upload ảnh nhé.
                    </div>
                  </div>
                )}
                {detail.photo &&
                  [
                    { t: 10, l: 10 },
                    { t: 10, r: 10 },
                    { b: 10, l: 10 },
                    { b: 10, r: 10 },
                  ].map(
                    (
                      p: { t?: number; b?: number; l?: number; r?: number },
                      i,
                    ) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          width: 28,
                          height: 28,
                          top: p.t,
                          bottom: p.b,
                          left: p.l,
                          right: p.r,
                          borderTop:
                            p.t != null ? `3px solid ${detail.color}` : "none",
                          borderBottom:
                            p.b != null ? `3px solid ${detail.color}` : "none",
                          borderLeft:
                            p.l != null ? `3px solid ${detail.color}` : "none",
                          borderRight:
                            p.r != null ? `3px solid ${detail.color}` : "none",
                          borderRadius: 6,
                        }}
                      />
                    ),
                  )}
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: FF_WELL,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: FF_INK,
                  letterSpacing: ".08em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {detail.full}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: FF_FG3,
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                {detail.photo
                  ? "Ảnh bạn đã upload khi liên kết tài khoản"
                  : "Đưa điện thoại cho người gửi để quét"}
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                <button
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 14,
                    background: FF_WELL,
                    color: FF_INK,
                    border: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Lưu ảnh
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 14,
                    background: FF_VIOLET,
                    color: "#fff",
                    border: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Chia sẻ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
      <SubHeader title="Tài khoản liên kết" onBack={onBack} />
      <div style={{ padding: "0 20px" }}>
        <div
          style={{
            padding: 18,
            borderRadius: 20,
            background: "linear-gradient(135deg,#7C3AED 0%,#9F7BFF 100%)",
            color: "#fff",
            marginBottom: 14,
            boxShadow: "0 12px 28px rgba(124,58,237,.3)",
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.85 }}>
            Tổng số dư ({accounts.length} tài khoản)
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 30,
              marginTop: 4,
              letterSpacing: "-.02em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {fmtVND(accounts.reduce((s, a) => s + a.balance, 0))}{" "}
            <span style={{ fontSize: 18, opacity: 0.7 }}>₫</span>
          </div>
        </div>
        {accounts.map((a, i) => (
          <div
            key={i}
            onClick={() => setDetail(a)}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 14,
              marginBottom: 10,
              border: "1px solid rgba(22,16,50,.06)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: a.color + "22",
                color: a.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                overflow: "hidden",
              }}
            >
              {a.photo ? (
                <img
                  src={a.photo}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                a.emoji
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: FF_INK,
                }}
              >
                {a.name}
              </div>
              <div style={{ fontSize: 12, color: FF_FG3, marginTop: 2 }}>
                {a.type} · {a.last}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: a.balance < 0 ? FF_CORAL : FF_INK,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {a.balance < 0 ? "-" : ""}
                {fmtVND(Math.abs(a.balance))} ₫
              </div>
              <div style={{ fontSize: 10, color: FF_FG3, marginTop: 2 }}>
                Cập nhật 2 phút trước
              </div>
            </div>
            <IconChevronRight width={14} height={14} stroke={FF_FG3} />
          </div>
        ))}
        <button
          onClick={() => setShowAdd(true)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 16,
            border: "1.5px dashed rgba(124,58,237,.3)",
            background: "transparent",
            color: FF_VIOLET,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <IconPlus width={16} height={16} /> Thêm tài khoản mới
        </button>
      </div>

      {showAdd && (
        <AddAccountModal
          onClose={() => setShowAdd(false)}
          onAdd={(acc) => {
            setAccounts([...accounts, acc]);
            setShowAdd(false);
          }}
        />
      )}
    </div>
  );
}

function AddAccountModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (acc: Account) => void;
}) {
  const banks = [
    { name: "Techcombank", color: "#E70014", emoji: "🏦", type: "Ngân hàng" },
    { name: "Vietcombank", color: "#007B47", emoji: "🏦", type: "Ngân hàng" },
    { name: "BIDV", color: "#0072BC", emoji: "🏦", type: "Ngân hàng" },
    { name: "MB Bank", color: "#1E3A8A", emoji: "🏦", type: "Ngân hàng" },
    { name: "VPBank", color: "#00A650", emoji: "🏦", type: "Ngân hàng" },
    { name: "ACB", color: "#005BAA", emoji: "🏦", type: "Ngân hàng" },
    { name: "MoMo", color: "#A50064", emoji: "💜", type: "Ví điện tử" },
    { name: "ZaloPay", color: "#0068FF", emoji: "💙", type: "Ví điện tử" },
    { name: "Khác", color: "#7C3AED", emoji: "🏛️", type: "Ngân hàng" },
  ];

  const [step, setStep] = useState(1);
  const [bank, setBank] = useState<(typeof banks)[0] | null>(null);
  const [acctNum, setAcctNum] = useState("");
  const [holder, setHolder] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const onPickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhoto(ev.target?.result as string);
    reader.readAsDataURL(f);
  };

  const valid =
    bank && acctNum.replace(/\s/g, "").length >= 6 && holder.trim().length >= 2;

  const submit = () => {
    if (!valid || !bank) return;
    const clean = acctNum.replace(/\s/g, "");
    const last = "***" + clean.slice(-4);
    onAdd({
      name: bank.name,
      type: bank.type,
      color: bank.color,
      emoji: bank.emoji,
      last,
      full: acctNum,
      balance: 0,
      holder: holder.toUpperCase(),
      branch: "Chi nhánh mặc định",
      swift: "—",
      opened: new Date().toLocaleDateString("vi-VN"),
      status: "Đang xác thực",
      photo,
    });
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(22,16,50,.6)",
        zIndex: 100,
        display: "flex",
        alignItems: "flex-end",
        animation: "ff-fade 220ms cubic-bezier(.22,1,.36,1)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          background: "#fff",
          borderRadius: "24px 24px 0 0",
          padding: "18px 20px 28px",
          maxHeight: "85%",
          overflowY: "auto",
          animation: "ff-up 320ms cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div
          style={{
            width: 44,
            height: 5,
            background: "#E6E2F0",
            borderRadius: 3,
            margin: "0 auto 14px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 20,
              color: FF_INK,
            }}
          >
            {step === 1 ? "Chọn ngân hàng" : "Thông tin tài khoản"}
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              border: 0,
              background: "#F3F1FA",
              color: FF_INK,
              cursor: "pointer",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            ×
          </button>
        </div>
        <div style={{ fontSize: 13, color: FF_FG3, marginBottom: 16 }}>
          Bước {step}/2 ·{" "}
          {step === 1 ? "Ngân hàng hoặc ví điện tử" : `${bank?.name}`}
        </div>

        {step === 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 10,
            }}
          >
            {banks.map((b) => (
              <button
                key={b.name}
                onClick={() => {
                  setBank(b);
                  setStep(2);
                }}
                style={{
                  padding: 14,
                  borderRadius: 16,
                  border: "1px solid rgba(22,16,50,.08)",
                  background: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: b.color + "22",
                    color: b.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {b.emoji}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 12,
                    color: FF_INK,
                    textAlign: "center",
                  }}
                >
                  {b.name}
                </div>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: FF_FG3,
                  marginBottom: 10,
                }}
              >
                Ảnh thẻ / logo (tuỳ chọn)
              </div>
              <button
                onClick={() => fileRef.current?.click()}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 20,
                  border: photo ? "none" : "2px dashed rgba(124,58,237,.35)",
                  background: photo ? `url(${photo}) center/cover` : FF_WELL,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  margin: "0 auto",
                  color: FF_VIOLET,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {!photo && (
                  <>
                    <div style={{ fontSize: 28 }}>📸</div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: 11,
                      }}
                    >
                      Tải lên ảnh
                    </div>
                  </>
                )}
                {photo && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 6,
                      right: 6,
                      background: "rgba(0,0,0,.55)",
                      color: "#fff",
                      borderRadius: 10,
                      padding: "3px 8px",
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    Đổi
                  </div>
                )}
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={onPickFile}
                style={{ display: "none" }}
              />
              {photo && (
                <button
                  onClick={() => setPhoto(null)}
                  style={{
                    background: "transparent",
                    border: 0,
                    color: FF_CORAL,
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 12,
                    cursor: "pointer",
                    marginTop: 8,
                  }}
                >
                  Xoá ảnh
                </button>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".06em",
                    color: FF_FG3,
                    marginBottom: 6,
                    textTransform: "uppercase",
                  }}
                >
                  Số tài khoản
                </div>
                <input
                  value={acctNum}
                  onChange={(e) =>
                    setAcctNum(e.target.value.replace(/[^\d\s]/g, ""))
                  }
                  placeholder="VD: 1903 7654 8823 3456"
                  inputMode="numeric"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1.5px solid rgba(22,16,50,.1)",
                    fontSize: 15,
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    letterSpacing: ".04em",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".06em",
                    color: FF_FG3,
                    marginBottom: 6,
                    textTransform: "uppercase",
                  }}
                >
                  Tên chủ tài khoản
                </div>
                <input
                  value={holder}
                  onChange={(e) => setHolder(e.target.value)}
                  placeholder="VD: NGUYEN VAN AN"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1.5px solid rgba(22,16,50,.1)",
                    fontSize: 15,
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                padding: 12,
                borderRadius: 12,
                background: "#EEF9F4",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: 18 }}>🔒</div>
              <div style={{ fontSize: 12, color: FF_INK, lineHeight: 1.5 }}>
                Thông tin được mã hoá <b>AES-256</b>. FinFlow không lưu mật khẩu
                ngân hàng của bạn.
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: "#F3F1FA",
                  color: FF_INK,
                  border: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                ← Quay lại
              </button>
              <button
                disabled={!valid}
                onClick={submit}
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: 16,
                  background: valid ? FF_VIOLET : "#D6D4E0",
                  color: "#fff",
                  border: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: valid ? "pointer" : "not-allowed",
                  boxShadow: valid ? "0 8px 20px rgba(124,58,237,.3)" : "none",
                }}
              >
                Liên kết tài khoản
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Security
export function SecurityScreen({ onBack }: { onBack: () => void }) {
  const [faceid, setFaceid] = useState(true);
  const [bio, setBio] = useState(true);
  const [pin, setPin] = useState(true);
  const [twoFa, setTwoFa] = useState(false);
  const [appLock, setAppLock] = useState(true);

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
      <SubHeader title="Bảo mật & Face ID" onBack={onBack} />
      <div style={{ padding: "4px 20px 16px" }}>
        <div
          style={{
            padding: 18,
            borderRadius: 20,
            background: "linear-gradient(135deg,#3DD9B3,#7FE8C9)",
            color: "#fff",
            boxShadow: "0 12px 28px rgba(61,217,179,.3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                background: "rgba(255,255,255,.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconLock width={24} height={24} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, opacity: 0.9 }}>Điểm bảo mật</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "-.01em",
                }}
              >
                Tài khoản an toàn
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 28,
              }}
            >
              85/100
            </div>
          </div>
        </div>
      </div>
      <Section title="Xác thực">
        <Row
          icon={IconFaceId}
          label="Face ID"
          detail={faceid ? "Đang bật" : "Đã tắt"}
          right={<Switch on={faceid} onChange={setFaceid} />}
          isFirst
        />
        <Row
          icon={IconUser}
          label="Dấu vân tay"
          detail={bio ? "Đang bật" : "Đã tắt"}
          right={<Switch on={bio} onChange={setBio} />}
        />
        <Row
          icon={IconLock}
          label="Mã PIN 6 số"
          detail={pin ? "Đã thiết lập" : "Chưa thiết lập"}
          right={<Switch on={pin} onChange={setPin} />}
        />
      </Section>
      <Section title="Tăng cường">
        <Row
          icon={IconSparkle}
          label="Xác thực 2 lớp (2FA)"
          detail={twoFa ? "Đang bật" : "Khuyến nghị bật"}
          right={<Switch on={twoFa} onChange={setTwoFa} />}
          isFirst
        />
        <Row
          icon={IconZap}
          label="Khóa app khi nền"
          detail={appLock ? "Khóa ngay" : "Không khóa"}
          right={<Switch on={appLock} onChange={setAppLock} />}
        />
      </Section>
      <Section title="Quản lý">
        <Row icon={IconLock} label="Đổi mật khẩu" onClick={() => {}} isFirst />
        <Row
          icon={IconSettings}
          label="Thiết bị đăng nhập"
          detail="3 thiết bị"
          onClick={() => {}}
        />
        <Row
          icon={IconTrash}
          label="Đăng xuất tất cả thiết bị"
          danger
          onClick={() => {}}
        />
      </Section>
    </div>
  );
}

// Invite
export function InviteScreen({ onBack }: { onBack: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard?.writeText("FINFLOW-AN2026");
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
      <SubHeader title="Mời bạn bè" onBack={onBack} />
      <div style={{ padding: "0 20px" }}>
        <div
          style={{
            padding: 24,
            borderRadius: 24,
            textAlign: "center",
            background:
              "linear-gradient(135deg,#7C3AED 0%,#B68BFF 50%,#FF6B9D 100%)",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(124,58,237,.3)",
          }}
        >
          <div style={{ fontSize: 56, marginBottom: 8 }}>🎁</div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "-.02em",
              lineHeight: 1.2,
            }}
          >
            Tặng bạn 50k,
            <br />
            bạn tặng bạn 50k
          </div>
          <div
            style={{
              fontSize: 13,
              opacity: 0.9,
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            Khi bạn bè đăng ký FinFlow bằng mã của bạn và liên kết tài khoản đầu
            tiên.
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: FF_FG3,
              marginBottom: 8,
              paddingLeft: 4,
            }}
          >
            Mã giới thiệu của bạn
          </div>
          <div
            style={{
              padding: 18,
              borderRadius: 16,
              background: "#fff",
              border: "2px dashed rgba(124,58,237,.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 22,
                color: FF_VIOLET,
                letterSpacing: ".05em",
              }}
            >
              FINFLOW-AN2026
            </div>
            <button
              onClick={copy}
              style={{
                padding: "10px 16px",
                borderRadius: 12,
                border: 0,
                background: copied ? FF_MINT : FF_VIOLET,
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {copied ? "✓ Đã chép" : "Chép"}
            </button>
          </div>
        </div>
        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 10,
          }}
        >
          {[
            { label: "Messenger", emoji: "💬", bg: "#E0F4FC" },
            { label: "Zalo", emoji: "💠", bg: "#E0F4FC" },
            { label: "Telegram", emoji: "✈️", bg: "#E0F4FC" },
            { label: "Khác", emoji: "⋯", bg: "#F3F1FA" },
          ].map((s) => (
            <button
              key={s.label}
              style={{
                padding: "12px 4px",
                borderRadius: 14,
                background: s.bg,
                border: 0,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div style={{ fontSize: 22 }}>{s.emoji}</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 11,
                  color: FF_INK,
                }}
              >
                {s.label}
              </div>
            </button>
          ))}
        </div>
        <div
          style={{
            marginTop: 18,
            padding: 18,
            borderRadius: 18,
            background: "#fff",
            border: "1px solid rgba(22,16,50,.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 12, color: FF_FG3 }}>Đã kiếm được</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 24,
                  color: FF_INK,
                  fontVariantNumeric: "tabular-nums",
                  marginTop: 2,
                }}
              >
                250.000 <span style={{ fontSize: 16 }}>₫</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: FF_FG3 }}>Đã mời</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 24,
                  color: FF_VIOLET,
                  marginTop: 2,
                }}
              >
                5 bạn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Help
export function HelpScreen({ onBack }: { onBack: () => void }) {
  const [query, setQuery] = useState("");
  const faqs = [
    {
      q: "Làm sao để liên kết tài khoản ngân hàng?",
      a: 'Vào "Tài khoản liên kết" trong hồ sơ, chọn "Thêm tài khoản mới" và chọn ngân hàng của bạn.',
    },
    {
      q: "Dữ liệu của tôi có an toàn không?",
      a: "FinFlow mã hóa đầu cuối (AES-256) và tuân thủ chuẩn PCI DSS.",
    },
    {
      q: "Tôi có thể xuất giao dịch ra Excel không?",
      a: 'Có. Vào "Cài đặt" → "Xuất dữ liệu" để tải file .xlsx hoặc .csv.',
    },
    {
      q: "Làm sao tắt thông báo chi tiêu?",
      a: 'Vào "Thông báo" trong hồ sơ, tắt các loại thông báo bạn không muốn nhận.',
    },
    {
      q: "FinFlow Pro có những tính năng gì?",
      a: "Pro mở khóa: phân tích không giới hạn, xuất PDF đẹp, AI coach cá nhân, và không quảng cáo.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);
  const filtered = faqs.filter(
    (f) => !query || f.q.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
      <SubHeader title="Trợ giúp" onBack={onBack} />
      <div style={{ padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 14px",
            borderRadius: 14,
            background: "#fff",
            border: "1px solid rgba(22,16,50,.08)",
            marginBottom: 14,
          }}
        >
          <IconSearch width={18} height={18} stroke={FF_FG3} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm câu hỏi..."
            style={{
              flex: 1,
              border: 0,
              outline: 0,
              fontSize: 14,
              fontFamily: "var(--font-body)",
              background: "transparent",
              color: FF_INK,
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <button
            style={{
              padding: 16,
              borderRadius: 18,
              border: 0,
              cursor: "pointer",
              background: "linear-gradient(135deg,#7C3AED,#B68BFF)",
              color: "#fff",
              textAlign: "left",
              boxShadow: "0 8px 20px rgba(124,58,237,.25)",
            }}
          >
            <div style={{ fontSize: 24 }}>💬</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                marginTop: 4,
              }}
            >
              Chat với AI
            </div>
            <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>
              Trả lời trong 30s
            </div>
          </button>
          <button
            style={{
              padding: 16,
              borderRadius: 18,
              border: "1px solid rgba(22,16,50,.08)",
              cursor: "pointer",
              background: "#fff",
              color: FF_INK,
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: 24 }}>📞</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                marginTop: 4,
              }}
            >
              Gọi hỗ trợ
            </div>
            <div style={{ fontSize: 11, color: FF_FG3, marginTop: 2 }}>
              8h — 22h hàng ngày
            </div>
          </button>
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: FF_FG3,
            marginBottom: 8,
            paddingLeft: 4,
          }}
        >
          Câu hỏi thường gặp
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            border: "1px solid rgba(22,16,50,.06)",
            overflow: "hidden",
          }}
        >
          {filtered.map((f, i) => (
            <div
              key={i}
              style={{ borderTop: i ? "1px solid rgba(22,16,50,.06)" : "none" }}
            >
              <div
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  padding: "14px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 14,
                    color: FF_INK,
                    lineHeight: 1.4,
                  }}
                >
                  {f.q}
                </div>
                <div
                  style={{
                    transform: open === i ? "rotate(180deg)" : "none",
                    transition: "transform 200ms",
                    color: FF_FG3,
                  }}
                >
                  <IconChevronDown width={16} height={16} />
                </div>
              </div>
              {open === i && (
                <div
                  style={{
                    padding: "0 16px 14px",
                    fontSize: 13,
                    color: FF_FG2,
                    lineHeight: 1.55,
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Settings
export function SettingsScreen({ onBack, onNav }: { onBack: () => void; onNav?: (key: string) => void }) {
  const [notifTx, setNotifTx] = useState(true);
  const [notifBudget, setNotifBudget] = useState(true);
  const [notifGoal, setNotifGoal] = useState(true);
  const [notifMarketing, setNotifMarketing] = useState(false);
  const [autoCategory, setAutoCategory] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: "100%" }}>
      <SubHeader title="Cài đặt" onBack={onBack} />
      <Section title="Thông báo">
        <Row
          icon={IconBell}
          label="Giao dịch mới"
          detail="Mỗi khi có giao dịch"
          right={<Switch on={notifTx} onChange={setNotifTx} />}
          isFirst
        />
        <Row
          icon={IconTarget}
          label="Cảnh báo ngân sách"
          detail="Khi vượt 80% hạn mức"
          right={<Switch on={notifBudget} onChange={setNotifBudget} />}
        />
        <Row
          icon={IconSparkle}
          label="Cột mốc mục tiêu"
          detail="Đạt 25%, 50%, 75%, 100%"
          right={<Switch on={notifGoal} onChange={setNotifGoal} />}
        />
        <Row
          icon={IconGift}
          label="Tin tức & khuyến mãi"
          right={<Switch on={notifMarketing} onChange={setNotifMarketing} />}
        />
      </Section>
      <Section title="Tự động hoá">
        <Row
          icon={IconZap}
          label="Tự động phân loại giao dịch"
          detail="AI phân loại giúp bạn"
          right={<Switch on={autoCategory} onChange={setAutoCategory} />}
          isFirst
        />
        <Row
          icon={IconChart}
          label="Báo cáo tuần qua email"
          right={<Switch on={weeklyReport} onChange={setWeeklyReport} />}
        />
      </Section>
      <Section title="Dữ liệu">
        <Row
          icon={IconSend}
          label="Xuất dữ liệu"
          detail="Excel, CSV, PDF"
          onClick={() => {}}
          isFirst
        />
        <Row
          icon={IconCalendar}
          label="Lịch sử sao lưu"
          detail="Sao lưu gần nhất: Hôm qua"
          onClick={() => {}}
        />
        <Row
          icon={IconTrash}
          label="Xoá toàn bộ dữ liệu"
          danger
          onClick={() => {}}
        />
      </Section>
      <Section title="Về FinFlow">
        <Row
          icon={IconHelp}
          label="Điều khoản sử dụng"
          onClick={() => onNav?.('terms')}
          isFirst
        />
        <Row icon={IconLock} label="Chính sách bảo mật" onClick={() => onNav?.('privacy')} />
        <Row
          icon={IconSparkle}
          label="Nâng cấp Pro"
          detail="Đang dùng Pro ✨"
          onClick={() => onNav?.('pro')}
        />
        <Row icon={IconHeart} label="Đánh giá FinFlow" onClick={() => onNav?.('rate')} />
      </Section>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: 11,
          color: FF_FG3,
        }}
      >
        FinFlow v2.4.0 · Build 2026.04.21
      </div>
    </div>
  );
}

/* ───────────────────────── Terms of Service ───────────────────────── */
export function TermsScreen({ onBack }: { onBack: () => void }) {
  const sections = [
    { h: '1. Chấp thuận điều khoản', p: 'Bằng việc sử dụng FinFlow, bạn đồng ý với toàn bộ điều khoản được nêu dưới đây. Nếu không đồng ý, vui lòng ngừng sử dụng ứng dụng.' },
    { h: '2. Tài khoản người dùng', p: 'Bạn chịu trách nhiệm bảo mật mật khẩu và toàn bộ hoạt động trên tài khoản của mình. Vui lòng thông báo ngay cho FinFlow nếu phát hiện bất kỳ hoạt động trái phép nào.' },
    { h: '3. Dịch vụ tài chính', p: 'FinFlow cung cấp công cụ quản lý chi tiêu, ngân sách và đầu tư. Mọi quyết định tài chính là của bạn — FinFlow không đảm bảo lợi nhuận từ các khoản đầu tư.' },
    { h: '4. Giới hạn trách nhiệm', p: 'FinFlow không chịu trách nhiệm với các thiệt hại gián tiếp, mất dữ liệu, hay tổn thất phát sinh từ việc sử dụng ứng dụng ngoài ý muốn.' },
    { h: '5. Thay đổi điều khoản', p: 'Chúng tôi có thể cập nhật điều khoản bất kỳ lúc nào. Phiên bản mới sẽ có hiệu lực sau 7 ngày kể từ khi thông báo đến người dùng.' },
    { h: '6. Liên hệ', p: 'Mọi thắc mắc về điều khoản, vui lòng email về legal@finflow.vn hoặc chat với hỗ trợ trong mục Trợ giúp.' },
  ];
  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <SubHeader title="Điều khoản sử dụng" onBack={onBack} />
      <div style={{ padding: '4px 20px 16px' }}>
        <div style={{
          padding: 16, borderRadius: 16,
          background: 'linear-gradient(135deg,#F6F2FF,#FFE4E4)',
          border: '1px solid rgba(124,58,237,.1)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FF_VIOLET }}>Cập nhật gần nhất</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK, marginTop: 4 }}>21 tháng 4, 2026</div>
        </div>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {sections.map((s, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 16, border: '1px solid rgba(22,16,50,.06)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK, marginBottom: 8 }}>{s.h}</div>
            <div style={{ fontSize: 13, color: FF_FG2, lineHeight: 1.6 }}>{s.p}</div>
          </div>
        ))}
        <div style={{ fontSize: 11, color: FF_FG3, textAlign: 'center', padding: '8px 0' }}>
          © 2026 FinFlow Technologies JSC · Hà Nội, Việt Nam
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Privacy Policy ───────────────────────── */
export function PrivacyScreen({ onBack }: { onBack: () => void }) {
  const sections = [
    { icon: '🔒', h: 'Dữ liệu chúng tôi thu thập', p: 'Thông tin tài khoản (tên, email, SĐT), lịch sử giao dịch, thiết bị đăng nhập, và các tương tác trong app để cải thiện trải nghiệm.' },
    { icon: '🛡️', h: 'Cách chúng tôi bảo vệ', p: 'Mã hoá AES-256 đầu cuối, hạ tầng AWS chuẩn SOC 2, nhân viên truy cập dữ liệu phải qua MFA và audit log đầy đủ.' },
    { icon: '🤝', h: 'Chia sẻ với bên thứ ba', p: 'Chúng tôi KHÔNG bán dữ liệu cá nhân. Chỉ chia sẻ với đối tác ngân hàng liên kết khi bạn cho phép, và với cơ quan pháp luật khi có yêu cầu hợp pháp.' },
    { icon: '👤', h: 'Quyền của bạn', p: 'Xem, sửa, tải về, hoặc xoá toàn bộ dữ liệu bất cứ lúc nào trong Cài đặt → Dữ liệu. Phản hồi yêu cầu trong vòng 30 ngày.' },
    { icon: '🍪', h: 'Cookie & Analytics', p: 'Chúng tôi dùng cookie cần thiết để duy trì phiên đăng nhập và Google Analytics (ẩn danh) để hiểu cách bạn dùng app.' },
  ];
  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <SubHeader title="Chính sách bảo mật" onBack={onBack} />
      <div style={{ padding: '4px 20px 16px' }}>
        <div style={{
          padding: 20, borderRadius: 20, color: '#fff',
          background: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)',
          boxShadow: '0 12px 28px rgba(61,217,179,.3)',
        }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>🛡️</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.3 }}>
            Dữ liệu của bạn thuộc về bạn
          </div>
          <div style={{ fontSize: 13, opacity: .95, marginTop: 6, lineHeight: 1.5 }}>
            FinFlow mã hoá mọi giao dịch, không bán dữ liệu cho bên thứ ba, và tuân thủ chuẩn GDPR + PCI DSS.
          </div>
        </div>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sections.map((s, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 16, border: '1px solid rgba(22,16,50,.06)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, background: FF_WELL,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
            }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: FF_INK, marginBottom: 4 }}>{s.h}</div>
              <div style={{ fontSize: 13, color: FF_FG2, lineHeight: 1.55 }}>{s.p}</div>
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <button style={{
            padding: '10px 18px', borderRadius: 12, border: '1.5px solid rgba(124,58,237,.25)',
            background: 'transparent', color: FF_VIOLET,
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
          }}>📧 privacy@finflow.vn</button>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Pro Upgrade ───────────────────────── */
export function ProScreen({ onBack }: { onBack: () => void }) {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');
  const features = [
    { icon: '📊', title: 'Phân tích không giới hạn', desc: 'Xem insight 12+ tháng, so sánh theo năm, xuất PDF' },
    { icon: '🤖', title: 'AI Coach cá nhân', desc: 'Gợi ý chi tiêu thông minh, cảnh báo sớm, mục tiêu tự động' },
    { icon: '🎨', title: 'Theme tuỳ chỉnh', desc: '8 giao diện cao cấp, icon riêng, widget màn hình chính' },
    { icon: '💾', title: 'Sao lưu không giới hạn', desc: 'iCloud + Google Drive, lịch sử 5 năm' },
    { icon: '🔕', title: 'Không quảng cáo', desc: 'Trải nghiệm sạch, tốc độ nhanh hơn 2x' },
    { icon: '⚡', title: 'Hỗ trợ ưu tiên', desc: 'Chat 24/7, phản hồi dưới 5 phút' },
  ];
  const prices = {
    monthly: { now: '49.000', period: '/ tháng', save: null },
    yearly: { now: '399.000', period: '/ năm', save: 'Tiết kiệm 33% · chỉ ~33k/tháng' },
  };

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <SubHeader title="FinFlow Pro" onBack={onBack} />
      <div style={{ padding: '0 20px' }}>
        {/* Hero */}
        <div style={{
          padding: 24, borderRadius: 24, textAlign: 'center',
          background: 'linear-gradient(135deg,#16102F 0%,#2E1A5C 50%,#7C3AED 100%)',
          color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(22,16,50,.4)',
        }}>
          <div style={{ position: 'absolute', top: -60, right: -40, width: 200, height: 200, background: 'rgba(255,201,60,.3)', borderRadius: '50%', filter: 'blur(30px)' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -40, width: 180, height: 180, background: 'rgba(255,107,157,.25)', borderRadius: '50%', filter: 'blur(30px)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px',
              borderRadius: 999, background: 'linear-gradient(135deg,#FFC93C,#FF6B9D)',
              fontSize: 11, fontWeight: 700, letterSpacing: '.1em', marginBottom: 14,
            }}>✨ PRO</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-.02em', lineHeight: 1.2 }}>
              Mở khoá toàn bộ<br />sức mạnh FinFlow
            </div>
            <div style={{ fontSize: 13, opacity: .9, marginTop: 10, lineHeight: 1.5 }}>
              Đang được <b>240.000+ người</b> Việt tin dùng ⭐ 4.9/5
            </div>
          </div>
        </div>

        {/* Billing toggle */}
        <div style={{ display: 'flex', gap: 6, background: FF_WELL, padding: 4, borderRadius: 14, marginTop: 18, marginBottom: 14 }}>
          {(['monthly', 'yearly'] as const).map(p => (
            <button key={p} onClick={() => setBilling(p)} style={{
              flex: 1, padding: '10px 0', borderRadius: 10, border: 0,
              background: billing === p ? '#fff' : 'transparent',
              color: billing === p ? FF_INK : FF_FG2,
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
              boxShadow: billing === p ? '0 2px 6px rgba(60,40,160,.08)' : 'none',
              position: 'relative',
            }}>
              {p === 'monthly' ? 'Theo tháng' : 'Theo năm'}
              {p === 'yearly' && billing !== 'yearly' && (
                <span style={{
                  position: 'absolute', top: -8, right: 4,
                  padding: '2px 6px', borderRadius: 6, background: FF_CORAL, color: '#fff',
                  fontSize: 9, fontWeight: 700,
                }}>-33%</span>
              )}
            </button>
          ))}
        </div>

        {/* Price card */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: 20,
          border: `2px solid ${FF_VIOLET}`,
          boxShadow: '0 10px 24px rgba(124,58,237,.12)',
          marginBottom: 18,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, color: FF_INK, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' }}>
              {prices[billing].now}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: FF_FG2 }}>₫</div>
            <div style={{ fontSize: 14, color: FF_FG3, marginLeft: 4 }}>{prices[billing].period}</div>
          </div>
          {prices[billing].save && (
            <div style={{
              display: 'inline-block', marginTop: 8, padding: '4px 10px', borderRadius: 8,
              background: '#DCFCE7', color: '#15803D', fontSize: 11, fontWeight: 700,
            }}>✓ {prices[billing].save}</div>
          )}
          <div style={{ fontSize: 12, color: FF_FG3, marginTop: 10 }}>
            Dùng thử <b style={{ color: FF_INK }}>7 ngày miễn phí</b> · huỷ bất cứ lúc nào
          </div>
        </div>

        {/* Features */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FF_FG3, margin: '14px 4px 10px' }}>
          Bạn sẽ nhận được
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              background: '#fff', borderRadius: 14, padding: 14,
              border: '1px solid rgba(22,16,50,.06)',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: FF_WELL,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
              }}>{f.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: FF_INK }}>{f.title}</div>
                <div style={{ fontSize: 12, color: FF_FG3, marginTop: 2, lineHeight: 1.45 }}>{f.desc}</div>
              </div>
              <div style={{ color: FF_MINT, fontSize: 18, fontWeight: 700 }}>✓</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <FFButton onClick={onBack}>Bắt đầu dùng thử 7 ngày miễn phí</FFButton>
        <div style={{ textAlign: 'center', fontSize: 11, color: FF_FG3, marginTop: 10, lineHeight: 1.5 }}>
          Không thu phí trong 7 ngày đầu · tự động gia hạn sau đó · huỷ bất cứ lúc nào
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Rate FinFlow ───────────────────────── */
export function RateScreen({ onBack }: { onBack: () => void }) {
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const allTags = ['Giao diện đẹp', 'Dễ dùng', 'Nhiều tính năng', 'Tốc độ nhanh', 'Hỗ trợ tốt', 'AI thông minh'];

  const toggleTag = (t: string) => {
    setTags(ts => ts.includes(t) ? ts.filter(x => x !== t) : [...ts, t]);
  };

  const submit = () => {
    if (stars === 0) return;
    setSent(true);
    setTimeout(() => onBack(), 1600);
  };

  if (sent) {
    return (
      <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
        <SubHeader title="Đánh giá FinFlow" onBack={onBack} />
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{
            width: 120, height: 120, borderRadius: 60, margin: '20px auto',
            background: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56,
            boxShadow: '0 16px 40px rgba(61,217,179,.4)',
          }}>🎉</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: FF_INK, letterSpacing: '-.01em' }}>
            Cảm ơn bạn rất nhiều!
          </div>
          <div style={{ fontSize: 14, color: FF_FG2, marginTop: 8, lineHeight: 1.5, maxWidth: 280, margin: '8px auto 0' }}>
            Phản hồi của bạn giúp FinFlow tốt hơn mỗi ngày 💜
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <SubHeader title="Đánh giá FinFlow" onBack={onBack} />
      <div style={{ padding: '0 20px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', padding: '20px 0 28px' }}>
          <div style={{ fontSize: 56, marginBottom: 8 }}>💜</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: FF_INK, letterSpacing: '-.01em', lineHeight: 1.3 }}>
            Bạn thấy FinFlow thế nào?
          </div>
          <div style={{ fontSize: 13, color: FF_FG2, marginTop: 6 }}>
            Đánh giá của bạn là động lực lớn cho team 🚀
          </div>
        </div>

        {/* Stars */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 12,
          padding: '20px 0', marginBottom: 20,
        }}>
          {[1, 2, 3, 4, 5].map(n => {
            const active = n <= (hover || stars);
            return (
              <button
                key={n}
                onClick={() => setStars(n)}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                style={{
                  width: 44, height: 44, borderRadius: 12, border: 0,
                  background: 'transparent', cursor: 'pointer',
                  fontSize: 38, lineHeight: 1,
                  filter: active ? 'none' : 'grayscale(1) opacity(.3)',
                  transform: active ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 180ms cubic-bezier(.22,1,.36,1)',
                }}
              >⭐</button>
            );
          })}
        </div>

        {stars > 0 && (
          <>
            {/* Label */}
            <div style={{
              textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 18, color: FF_VIOLET, marginBottom: 20,
              animation: 'ff-fade 220ms cubic-bezier(.22,1,.36,1)',
            }}>
              {stars === 5 ? 'Tuyệt vời! 🔥' : stars === 4 ? 'Rất tốt 👏' : stars === 3 ? 'Tạm ổn' : stars === 2 ? 'Cần cải thiện' : 'Chưa hài lòng'}
            </div>

            {/* Tags */}
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FF_FG3, marginBottom: 10 }}>
              Điều bạn thích nhất
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {allTags.map(t => {
                const on = tags.includes(t);
                return (
                  <button key={t} onClick={() => toggleTag(t)} style={{
                    padding: '8px 14px', borderRadius: 999,
                    border: `1.5px solid ${on ? FF_VIOLET : 'rgba(22,16,50,.1)'}`,
                    background: on ? FF_VIOLET : '#fff',
                    color: on ? '#fff' : FF_FG2,
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, cursor: 'pointer',
                    transition: 'all 150ms',
                  }}>{t}</button>
                );
              })}
            </div>

            {/* Feedback */}
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FF_FG3, marginBottom: 10 }}>
              Góp ý thêm (không bắt buộc)
            </div>
            <textarea
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              placeholder="Chia sẻ cảm nhận, tính năng mong muốn, hay bất kỳ điều gì bạn muốn team FinFlow biết..."
              style={{
                width: '100%', minHeight: 100, padding: 14, borderRadius: 14,
                border: '1.5px solid rgba(22,16,50,.1)',
                fontFamily: 'var(--font-body)', fontSize: 14, color: FF_INK,
                outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                marginBottom: 18,
              }}
            />

            <FFButton onClick={submit}>
              Gửi đánh giá {stars}⭐
            </FFButton>

            {stars >= 4 && (
              <div style={{
                marginTop: 14, padding: 14, borderRadius: 14,
                background: 'linear-gradient(135deg,#F6F2FF,#FFE4E4)',
                border: '1px solid rgba(124,58,237,.1)',
                fontSize: 13, color: FF_INK, lineHeight: 1.5, textAlign: 'center',
              }}>
                💜 Nếu thích FinFlow, bạn có thể đánh giá trên <b style={{ color: FF_VIOLET }}>App Store / Google Play</b> để ủng hộ team nhé!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
