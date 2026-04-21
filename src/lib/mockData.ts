export interface Transaction {
  id: number;
  name: string;
  cat: string;
  amount: number;
  time: string;
  note: string;
  method: string;
}

export interface Goal {
  id: number;
  name: string;
  emoji: string;
  saved: number;
  target: number;
  deadline: string;
  color: string;
}

export interface Budget {
  cat: string;
  spent: number;
  limit: number;
}

export interface Notification {
  id: number;
  type: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
}

export const MOCK_TX: Transaction[] = [
  { id: 1, name: 'Cơm trưa cạnh cty', cat: 'food', amount: -85000, time: 'Hôm nay · 12:30', note: 'Bún bò Huế + trà đá', method: 'Momo' },
  { id: 2, name: 'Grab về nhà', cat: 'transport', amount: -45000, time: 'Hôm nay · 09:10', note: 'Grab bike', method: 'Momo' },
  { id: 3, name: 'Lương tháng 4', cat: 'income', amount: 18000000, time: 'Hôm qua · 08:00', note: 'Lương cơ bản', method: 'Techcombank' },
  { id: 4, name: 'Shopee — tai nghe', cat: 'shopping', amount: -890000, time: 'Hôm qua · 20:45', note: 'Sony WF-C700N', method: 'Visa ***4455' },
  { id: 5, name: 'Netflix', cat: 'fun', amount: -260000, time: '2 ngày trước', note: 'Gói Premium', method: 'Visa ***4455' },
  { id: 6, name: 'Highlands coffee', cat: 'food', amount: -65000, time: '2 ngày trước', note: 'Phin sữa đá', method: 'Momo' },
  { id: 7, name: 'Tiền nhà tháng 4', cat: 'home', amount: -4500000, time: '3 ngày trước', note: 'Chuyển khoản chủ nhà', method: 'Techcombank' },
  { id: 8, name: 'The Coffee House', cat: 'food', amount: -55000, time: '3 ngày trước', note: 'Trà đào', method: 'Momo' },
  { id: 9, name: 'Xăng xe', cat: 'transport', amount: -100000, time: '4 ngày trước', note: 'Petrolimex', method: 'Tiền mặt' },
  { id: 10, name: 'Gym tháng 4', cat: 'health', amount: -450000, time: '5 ngày trước', note: 'California Fitness', method: 'Visa ***4455' },
  { id: 11, name: 'Freelance design', cat: 'income', amount: 3500000, time: '6 ngày trước', note: 'Dự án logo', method: 'Techcombank' },
  { id: 12, name: 'Sinh nhật Linh', cat: 'gift', amount: -350000, time: '1 tuần trước', note: 'Hoa + quà', method: 'Momo' },
];

export const MOCK_GOALS: Goal[] = [
  { id: 1, name: 'Mua MacBook', emoji: '🖥️', saved: 12400000, target: 18000000, deadline: '12/2026', color: 'violet' },
  { id: 2, name: 'Du lịch Đà Lạt', emoji: '🏔️', saved: 3200000, target: 5000000, deadline: '06/2026', color: 'mint' },
  { id: 3, name: 'Quỹ khẩn cấp', emoji: '🛡️', saved: 8500000, target: 30000000, deadline: 'Không giới hạn', color: 'yellow' },
];

export const MOCK_BUDGETS: Budget[] = [
  { cat: 'food', spent: 2340000, limit: 3000000 },
  { cat: 'transport', spent: 620000, limit: 800000 },
  { cat: 'shopping', spent: 890000, limit: 1000000 },
  { cat: 'home', spent: 4500000, limit: 4500000 },
  { cat: 'fun', spent: 495000, limit: 500000 },
  { cat: 'health', spent: 450000, limit: 600000 },
];

export const MOCK_NOTIFS: Notification[] = [
  { id: 1, type: 'warn', title: 'Ăn uống sắp hết ngân sách', body: 'Bạn đã dùng 78% ngân sách Ăn uống tháng này.', time: '5 phút trước', unread: true },
  { id: 2, type: 'success', title: 'Lương đã về! 🎉', body: '+18.000.000 ₫ từ Techcombank.', time: 'Hôm qua, 08:00', unread: true },
  { id: 3, type: 'info', title: 'Mẹo từ FinFlow ✨', body: 'Đặt tự động chuyển 10% lương vào quỹ khẩn cấp để nhẹ đầu hơn nha.', time: '2 ngày trước', unread: false },
  { id: 4, type: 'goal', title: 'Mục tiêu MacBook — 68%', body: 'Chỉ còn 5,6tr nữa là cán đích. Cố lên! 💪', time: '3 ngày trước', unread: false },
];
