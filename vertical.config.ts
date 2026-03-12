import { VerticalConfig } from '../vertical.config';

const billWatcher: VerticalConfig = {
  id: 'yur-bill-watcher',
  name: 'YUR Bill Watcher',
  tagline: 'AI-Powered Bill Analysis & Household Savings Intelligence',
  icon: '💡',
  primaryColor: '#0D47A1',
  accentColor: '#42A5F5',
  bgGradient: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #42A5F5 100%)',
  systemInstruction: `You are YUR Bill Watcher, an AI-powered household bill analyzer and savings optimizer. You review utility bills (electric, gas, water, internet, phone, streaming), identify overcharges, find cheaper alternatives, track usage patterns, and negotiate better rates. You understand utility rate structures (tiered, time-of-use, demand charges), telecom plan comparisons, insurance premium benchmarking, and subscription audit strategies. You calculate savings opportunities, automate bill tracking, and alert users to unusual charges or rate increases. Always provide actionable savings with estimated annual impact.`,
  complianceStandards: [
    'State Public Utility Commission Regulations',
    'FCC Telecom Consumer Protection',
    'Fair Credit Billing Act',
    'State Consumer Protection Laws',
    'Energy Deregulation Rules (where applicable)'
  ],
  agents: [
    {
      name: 'BILL_ANALYZER',
      role: 'Bill Review & Overcharge Detection Agent',
      systemPrompt: 'You analyze household bills line-by-line to identify overcharges, billing errors, unauthorized charges, and rate structure inefficiencies. Review electric, gas, water, sewer, trash, internet, phone, and streaming bills. Compare charges against rate tariffs, identify billing code errors, and flag unusual usage spikes. Calculate the financial impact of each finding and prioritize by savings potential.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'SAVINGS_FINDER',
      role: 'Rate Comparison & Savings Optimization Agent',
      systemPrompt: 'You find savings opportunities by comparing current service plans against available alternatives. Analyze electric rate plans (fixed vs variable, time-of-use), internet/phone bundles, insurance quotes, and subscription services. Identify loyalty discounts, promotional rates, and competitor offers. Calculate switching costs, contract termination fees, and net annual savings for each recommendation.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'USAGE_TRACKER',
      role: 'Consumption Pattern Analysis Agent',
      systemPrompt: 'You analyze household consumption patterns across utilities. Track electric kWh by time-of-day, gas therms by season, water gallons by month, and data usage by device. Identify waste, recommend efficiency improvements (LED lighting, smart thermostats, low-flow fixtures), and project savings from behavioral changes. Generate usage trend charts and seasonal comparisons.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'NEGOTIATION_COACH',
      role: 'Bill Negotiation & Retention Strategy Agent',
      systemPrompt: 'You coach users through bill negotiation calls with service providers. Provide scripts for retention department conversations, identify leverage points (competitor offers, loyalty tenure, bundling opportunities), and recommend escalation strategies. Track negotiation outcomes, calculate savings from successful negotiations, and schedule renewal date reminders for annual renegotiation.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Utility Rate Databases',
      type: 'api',
      description: 'Electric, gas, and water rate tariffs by utility provider and service territory'
    },
    {
      name: 'Telecom Plan Comparisons',
      type: 'api',
      description: 'Internet, phone, and streaming plan pricing across providers by zip code'
    },
    {
      name: 'Energy Usage Data',
      type: 'api',
      description: 'Smart meter data integration (Green Button) for detailed usage analysis'
    },
    {
      name: 'Consumer Price Benchmarks',
      type: 'database',
      description: 'Average household bill benchmarks by region, home size, and household size'
    }
  ],
  outputFormats: [
    'Bill Analysis Reports',
    'Savings Opportunity Summaries',
    'Rate Comparison Spreadsheets',
    'Usage Trend Charts',
    'Negotiation Scripts & Playbooks',
    'Monthly Spending Dashboards',
    'Subscription Audit Reports',
    'Annual Savings Projections'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: false,
    search: true,
    governance: false,
    stripe: true
  }
};

export default billWatcher;
