import type { ReactNode } from 'react'

export interface FaqItemData {
  id: string
  question: string
  answer: ReactNode
  tag?: string
}

export interface FaqSectionData {
  id: string
  title: string
  icon: string
  iconWeight?: 'bold' | 'fill'
  iconWrapClassName: string
  iconClassName?: string
  notice?: ReactNode
  defaultOpenId?: string
  items: FaqItemData[]
}

const securityNotice: ReactNode = (
  <div className="m-5 md:m-8 bg-brand-lime/5 border border-brand-lime/20 rounded-xl p-5 md:p-6 relative">
    <div className="flex items-start gap-3.5">
      <div className="w-9 h-9 rounded-xl bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center shrink-0 mt-0.5">
        <i className="ph-fill ph-shield-warning text-brand-lime text-xl" />
      </div>
      <div>
        <h3 className="text-brand-softWhite font-black mb-1.5 text-base md:text-lg">
          【資訊安全原則】
        </h3>
        <p className="text-brand-softWhite/80 text-sm md:text-base leading-relaxed font-bold">
          對內對外分享相關內容，請務必進行
          <strong className="bg-brand-lime text-brand-dark px-1.5 py-0.5 rounded mx-1 font-black text-sm">
            匿名化、去識別化或模糊處理
          </strong>
          等，確保資訊安全。
        </p>
      </div>
    </div>
  </div>
)

export const faqSections: FaqSectionData[] = [
  {
    id: 'section-announcement',
    title: '社群公告',
    icon: 'ph-megaphone',
    iconWrapClassName: '',
    defaultOpenId: 'announcement-1',
    items: [
      {
        id: 'announcement-1',
        question: 'Q：收到社群公告，要回覆嗎？',
        answer:
          '重要公告請簡單以表情符號回應，讓團隊知道你已讀；若公告要求回覆或填表，請依說明完成。',
      },
    ],
  },
  {
    id: 'section-lab',
    title: 'Future Circle Weekly Lab（未來共研所）',
    icon: 'ph-books',
    iconWrapClassName: '',
    items: [
      {
        id: 'lab-1',
        question: 'Q：有事不能參加怎麼辦？',
        answer: (
          <>
            若無法參加，最晚請於活動前在「Cohort 01｜Future Circle」LINE 社群通知 Group Lead 及 Member Success Ambassador（Joyce）。取得本期社群完成證書的其中一項標準為 Weekly Lab 正式出席率達{' '}
            <span className="bg-brand-lime text-brand-dark px-1.5 py-0.5 rounded mx-1 font-black text-sm">
              70% 以上
            </span>
            。
          </>
        ),
      },
      {
        id: 'lab-2',
        question: 'Q：晚到／提前離開需要通知嗎？',
        answer:
          '請提前或於當下在「Cohort 01｜Future Circle」LINE 社群通知 Group Lead 及 Member Success Ambassador（Joyce），方便掌握出席狀況；不需要詳細說明私人原因。晚到為超過 20：00；提前為活動正式結束前。',
      },
      {
        id: 'lab-3',
        question: 'Q：鏡頭和麥克風需要開啟嗎？',
        answer:
          '建議全程開啟鏡頭，是對同學及報告組的尊重，因為時間半年不長不短，把握大家交流跟認識你的時間；麥克風平時保持靜音，需要發言時再開啟即可。若環境不便，也可以使用聊天室參與。',
      },
      {
        id: 'lab-4',
        question: 'Q：會議連結在哪裡？',
        answer:
          '請查看「Cohort 01｜Future Circle」LINE 社群的當週公告與記事本或是官方信件；若仍找不到，可在社群詢問 Community Ambassador 或 Davin。',
      },
      {
        id: 'lab-5',
        question: 'Q：會議登入信箱有規定嗎？',
        answer: '請統一使用提供於「社群夥伴名錄」表格內的信箱，以利統計出席。',
      },
      {
        id: 'lab-6',
        question: 'Q：有沒有提供會議錄影（回放）？',
        answer:
          '是否提供錄影、開放期限與觀看方式，請以當週 Weekly Lab 公告為準。若內容涉及成員分享或敏感資訊，可能不提供回放。',
      },
      {
        id: 'lab-7',
        question: 'Q：想補充發言或問問題，但不方便開麥克風或主持人正在講話怎麼辦？',
        answer: '可以先將訊息發送至線上會議聊天室。',
      },
      {
        id: 'lab-8',
        question: 'Q：網路斷線怎麼辦？',
        answer:
          '請先重新連線或登入；若狀況持續，請在會議聊天室或「Cohort 01｜Future Circle」LINE 社群告知。',
      },
      {
        id: 'lab-9',
        question: 'Q：Circle Lab Notes 什麼時候需要完成？由誰負責？',
        answer:
          '請依當週公告的期限與共同時間完成。輪值組應確認主筆、資料整理與編輯分工；流程問題可詢問 Learning & Knowledge Ambassador。',
      },
      {
        id: 'lab-10',
        question: 'Q：當週輪值組的資料放在哪裡？',
        answer: (
          <>
            請上傳至當週公告指定的共同空間，並使用清楚的檔名，讓問題、案例、Prompt、Demo、資料與半成品可被追蹤。{' '}
            <a
              href="https://drive.google.com/drive/u/4/folders/153A-4YOvzdAXMwzRutzTBxw-d5c_CGQ5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-black text-brand-lime hover:text-brand-limeLight"
            >
              AIPost Future Circle Cohort 01 共同資料夾
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: 'section-interaction',
    title: '社群分享與互動說明',
    icon: 'ph-chats-circle',
    iconWrapClassName: '',
    notice: securityNotice,
    items: [
      {
        id: 'interaction-1',
        question: 'Q：可以分享實用或有趣的 AI 工具／文章／影片嗎？',
        answer:
          '可以，但請避免僅傳送連結。建議附上工具名稱、主要用途及個人推薦原因，方便大家閱讀。',
      },
      {
        id: 'interaction-2',
        question: 'Q：可以分享自己的作品或成果嗎？',
        answer:
          '可以，歡迎附上背景、成果亮點與連結。若想安排於 Weekly Lab 分享，請聯絡 Learning Ambassador，由其協助確認主題、導讀或分享安排。',
      },
      {
        id: 'interaction-3',
        question: 'Q：在社群發言有什麼需要注意的地方嗎？',
        answer:
          '請維持友善溝通，避免人身攻擊、嘲諷或貶低他人。若暫時不知道要回應什麼，看過訊息即可，不需要每則都回覆。',
      },
      {
        id: 'interaction-4',
        question: 'Q：若在社群中發生爭執或衝突怎麼辦？',
        answer:
          '請先暫停公開爭論，回到事件與需求本身；必要時私訊 Community Ambassador 或 Member Success Ambassador 協助釐清。若涉及騷擾、歧視或安全疑慮，請立即回報。',
      },
    ],
  },
  {
    id: 'section-maintenance',
    title: 'Cohort 01 參與與支持',
    icon: 'ph-users-three',
    iconWrapClassName: '',
    items: [
      {
        id: 'maintenance-1',
        question: 'Q：本屆共學計畫的重要日期在哪裡查看？',
        answer: '請以本屆行事曆與最新公告為準；如公告有異動，以最近一次通知為準。',
      },
      {
        id: 'maintenance-2',
        question: 'Q：計畫結束後，LINE 社群還會保留嗎？',
        answer: '是否保留、轉為校友交流群或調整使用方式，將於計畫結束前另行公告。',
      },
      {
        id: 'maintenance-3',
        question: 'Q：如果長期沒有在社群出現會怎樣嗎？',
        answer:
          '若連續兩週未出席且沒有非同步貢獻，Group Lead 或 Member Success Ambassador 可能會私訊了解狀況，先確認你需要什麼支持。',
      },
    ],
  },
  {
    id: 'section-exit',
    title: '參與調整與身分轉換',
    icon: 'ph-sign-out',
    iconWrapClassName: '',
    items: [
      {
        id: 'exit-1',
        question: 'Q：近期無法維持投入，應該怎麼處理？',
        answer:
          '請先與 Group Lead 或 Member Success Ambassador 私下討論，可協議降低任務、調整角色，或暫停最多四週並約定回歸時間；退出是最後一步。',
      },
      {
        id: 'exit-2',
        question: 'Q：若持續無法履行 Cohort 承諾，身分會如何調整？',
        answer:
          '經本人、Group Lead、Member Success Ambassador 及 Davin 確認後，可轉回 Future Network Member，並保留未來重新申請的可能。',
      },
    ],
  },
]
