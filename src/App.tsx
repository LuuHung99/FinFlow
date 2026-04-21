import { useState, useCallback } from "react";
import { IOSDevice } from "./components/IOSDevice";
import { BottomNav } from "./components/BottomNav";
import { AddSheet } from "./components/AddSheet";
import { Toast } from "./components/Toast";
import {
  HomeScreen,
  TransactionsScreen,
  AnalyticsScreen,
  BudgetScreen,
  GoalsScreen,
  InvestScreen,
  ProfileScreen,
  NotificationsScreen,
  TxDetailScreen,
  OnboardingScreen,
} from "./screens/Screens";
import { LoginScreen, SignupScreen, ForgotScreen } from "./screens/Auth";
import {
  EditProfileScreen,
  LinkedAccountsScreen,
  SecurityScreen,
  InviteScreen,
  HelpScreen,
  SettingsScreen,
} from "./screens/ProfileSub";
import type { Transaction } from "./lib/mockData";

type Screen =
  | "onboarding"
  | "login"
  | "signup"
  | "forgot"
  | "app"
  | "notifications"
  | "invest"
  | "goals"
  | "analytics"
  | "edit-profile"
  | "linked-accounts"
  | "security"
  | "invite"
  | "help"
  | "settings";

export default function App() {
  const [tab, setTab] = useState("home");
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [sheetOpen, setSheet] = useState(false);
  const [dark, setDark] = useState(false);
  const [openTx, setOpenTx] = useState<Transaction | null>(null);
  const [extraTx, setExtraTx] = useState<Transaction[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [userName, setUserName] = useState("An Nguyễn");
  const [greeting] = useState("Chào buổi sáng ☀️");

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  }, []);

  const nav = useCallback((k: string) => {
    if (k === "add") setSheet(true);
    else if (k === "notifications") setScreen("notifications");
    else if (k === "invest") setScreen("invest");
    else if (k === "goals") setScreen("goals");
    else if (k === "analytics") setScreen("analytics");
    else if (
      [
        "edit-profile",
        "linked-accounts",
        "security",
        "invite",
        "help",
        "settings",
      ].includes(k)
    ) {
      setScreen(k as Screen);
    } else {
      setScreen("app");
      setTab(k);
    }
  }, []);

  const onSubmit = useCallback(
    (data: { name: string; cat: string; amount: number; type: string }) => {
      if (!data.name || !data.amount) {
        setSheet(false);
        return;
      }
      const tx: Transaction = {
        id: Date.now(),
        name: data.name,
        cat: data.cat,
        amount: data.amount,
        time: "Vừa xong",
        method: "Momo",
        note: "",
      };
      setExtraTx((prev) => [tx, ...prev]);
      setSheet(false);
      showToast(
        data.type === "income" ? "Đã thêm khoản thu ✨" : "Đã ghi chi tiêu 💪",
      );
    },
    [showToast],
  );

  let body;
  if (screen === "onboarding") {
    body = <OnboardingScreen onStart={() => setScreen("login")} />;
  } else if (screen === "login") {
    body = (
      <LoginScreen
        onLogin={() => {
          setScreen("app");
          showToast("Đăng nhập thành công 🎉");
        }}
        onSignup={() => setScreen("signup")}
        onForgot={() => setScreen("forgot")}
      />
    );
  } else if (screen === "signup") {
    body = (
      <SignupScreen
        onSignup={(data) => {
          if (data?.name) setUserName(data.name);
          setScreen("app");
          showToast("Tạo tài khoản thành công ✨");
        }}
        onLogin={() => setScreen("login")}
        onBack={() => setScreen("login")}
      />
    );
  } else if (screen === "forgot") {
    body = (
      <ForgotScreen
        onBack={() => setScreen("login")}
        onSent={() => {
          setScreen("login");
          showToast("Mật khẩu đã được đặt lại ✅");
        }}
      />
    );
  } else if (screen === "notifications") {
    body = <NotificationsScreen onBack={() => setScreen("app")} />;
  } else if (screen === "invest") {
    body = <InvestScreen onBack={() => setScreen("app")} />;
  } else if (screen === "goals") {
    body = <GoalsScreen onBack={() => setScreen("app")} />;
  } else if (screen === "analytics") {
    body = <AnalyticsScreen onBack={() => setScreen("app")} />;
  } else if (screen === "edit-profile") {
    body = <EditProfileScreen onBack={() => setScreen("app")} />;
  } else if (screen === "linked-accounts") {
    body = <LinkedAccountsScreen onBack={() => setScreen("app")} />;
  } else if (screen === "security") {
    body = <SecurityScreen onBack={() => setScreen("app")} />;
  } else if (screen === "invite") {
    body = <InviteScreen onBack={() => setScreen("app")} />;
  } else if (screen === "help") {
    body = <HelpScreen onBack={() => setScreen("app")} />;
  } else if (screen === "settings") {
    body = <SettingsScreen onBack={() => setScreen("app")} />;
  } else if (openTx) {
    body = (
      <TxDetailScreen
        tx={openTx}
        onBack={() => setOpenTx(null)}
        onDelete={() => showToast("Đã xoá giao dịch")}
      />
    );
  } else {
    if (tab === "home")
      body = (
        <HomeScreen
          onNav={nav}
          onOpenTx={setOpenTx}
          userName={userName}
          greeting={greeting}
        />
      );
    else if (tab === "tx")
      body = <TransactionsScreen onOpenTx={setOpenTx} extraTx={extraTx} />;
    else if (tab === "budget") body = <BudgetScreen />;
    else if (tab === "profile")
      body = (
        <ProfileScreen
          onToggleDark={() => setDark(!dark)}
          dark={dark}
          onLogout={() => {
            setScreen("onboarding");
            setTab("home");
          }}
          onNav={nav}
        />
      );
  }

  const showBottomNav = screen === "app" && !openTx;

  return (
    <>
      <div style={{ maxWidth: 720, textAlign: "center", marginBottom: 24 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "-.01em",
          }}
        >
          <img
            src="/assets/logo.svg"
            alt=""
            style={{ width: 36, height: 36 }}
          />{" "}
          FinFlow
        </div>
      </div>

      <IOSDevice width={390} height={820}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            background: "#FAFAFA",
          }}
        >
          <div
            key={screen + tab + (openTx?.id || "")}
            style={{
              position: "absolute",
              inset: 0,
              overflowY: "auto",
              overflowX: "hidden",
              animation: "ff-slide-in 260ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            {body}
          </div>
          {showBottomNav && <BottomNav active={tab} onChange={nav} />}
          <AddSheet
            open={sheetOpen}
            onClose={() => setSheet(false)}
            onSubmit={onSubmit}
          />
          <Toast msg={toast} show={!!toast} />
          <div id="ff-portal-root" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 90 }} />
        </div>
      </IOSDevice>
    </>
  );
}
