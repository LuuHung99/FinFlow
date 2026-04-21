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
export function SettingsScreen({ onBack }: { onBack: () => void }) {
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
          onClick={() => {}}
          isFirst
        />
        <Row icon={IconLock} label="Chính sách bảo mật" onClick={() => {}} />
        <Row
          icon={IconSparkle}
          label="Nâng cấp Pro"
          detail="Đang dùng Pro ✨"
        />
        <Row icon={IconHeart} label="Đánh giá FinFlow" onClick={() => {}} />
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
