import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhanraj Gangnaik",
  initials: "DG",
  url: "https://dhanrajgangnaik.dev",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune",

  description:
    "Designing and operating production-style Kubernetes, CI/CD, and observability systems across self-hosted and hybrid cloud environments.",

  summary:
    "I design and operate self-hosted cloud infrastructure, Kubernetes platforms, and automated delivery systems. My work focuses on building production-style environments with CI/CD pipelines, GitOps workflows, observability stacks, and secure system architectures.\n\nI am particularly interested in reliability, scalability, and reproducibility in infrastructure design, translating complex workflows into resilient systems across self-hosted and hybrid cloud environments.",

  avatarUrl: "",

  skills: [
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "Python" },
    { name: "PostgreSQL" },
    { name: "Linux" },
    { name: "Nginx" },
    { name: "CI/CD" },
    { name: "GitOps" },
    { name: "Prometheus" },
    { name: "Grafana" },
    { name: "Proxmox VE" },
    { name: "Rancher" },
    { name: "Terraform" },
    { name: "Ansible" },
    { name: "AWS" },
    { name: "Gitea" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: NotebookIcon, label: "Projects" },
    {
      href: "#currently-working-on",
      icon: NotebookIcon,
      label: "Currently Working On",
    },
  ],

  contact: {
    email: "dhanrajgangnaik47@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DhanrajGangnaik",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhanraj-gangnaik-b5b9131b8/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dhanrajgangnaik47@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Ajeenkya D Y Patil University",
      href: "#",
      degree:
        "B.Tech in Information Technology (Cloud Technology & Information Security)",
      logoUrl: "/education/adypulogo.png",
      start: "2022",
      end: "2026",
    },
  ],

  projects: [
    {
      title: "Self-Hosted Data Platform",
      href: "https://github.com/DhanrajGangnaik/Self-Hosted-Data-Platform",
      dates: "2025",
      active: true,
      description:
        "Designed and operated a distributed self-hosted data and observability platform across multiple Proxmox VMs:\n\n• PostgreSQL HA with replica and WAL archiving\n• Prometheus + Grafana for metrics, alerting, and dashboards\n• ClickHouse pipeline for centralized log ingestion and analytics\n• TimescaleDB for time-series workloads and query optimization\n• Production-style deployment across multiple services and VMs\n\nImplemented end-to-end telemetry pipelines for metrics, logs, and time-series analytics, enabling SQL-driven detection workflows and platform-wide monitoring.",
      technologies: [
        "Prometheus",
        "Grafana",
        "TimescaleDB",
        "ClickHouse",
        "Docker",
        "Linux",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DhanrajGangnaik/Self-Hosted-Data-Platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/data-platform.png",
      video: "",
    },
    {
      title: "Kubernetes HA Cluster",
      href: "https://github.com/DhanrajGangnaik/Kubernetes-HA-Cluster",
      dates: "2025",
      active: true,
      description:
        "Designed and deployed a 9-node high-availability Kubernetes cluster (3 control planes, 6 workers) using Talos Linux:\n\n• MetalLB for LoadBalancer networking\n• Ingress-NGINX for external traffic routing\n• Rancher for centralized cluster lifecycle management\n• Multi-node orchestration for resilient workload placement\n• HA control plane for production-style self-hosted operations\n\nEngineered for control-plane resilience, workload orchestration, and reliable service exposure across a distributed Kubernetes environment.",
      technologies: [
        "Kubernetes",
        "Talos",
        "MetalLB",
        "Ingress-NGINX",
        "Rancher",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DhanrajGangnaik/Kubernetes-HA-Cluster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/k8s-ha.png",
      video: "",
    },
    {
      title: "Hybrid Cloud Kubernetes Failover System",
      href: "https://github.com/DhanrajGangnaik/Hybrid-Cloud-Kubernetes-Failover-System",
      dates: "2026",
      active: true,
      description:
        "Engineered a hybrid Kubernetes architecture combining a local Talos cluster as the primary environment with AWS EKS as the failover layer:\n\n• Local cluster serving primary workloads\n• AWS EKS configured as standby failover environment\n• Ingress-based routing for controlled traffic switching\n• Cross-environment workload validation and synchronization\n• Foundation for automated failover across self-hosted and cloud infrastructure\n\nDesigned to support workload continuity, failover testing, and hybrid deployment patterns across multiple environments.",
      technologies: [
        "Kubernetes",
        "Talos",
        "AWS EKS",
        "Nginx",
        "MetalLB",
        "Ingress-NGINX",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DhanrajGangnaik/Hybrid-Cloud-Kubernetes-Failover-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/hybrid-k8s.png",
      video: "",
    },
  ],

  currentlyWorkingOn: [
    {
      title: "Self-Hosted CI/CD Pipeline",
      dates: "Ongoing",
      location: "Gitea • Actions/Woodpecker • Docker Registry",
      description:
        "Designing a self-hosted CI/CD platform for end-to-end delivery workflows:\n\n• Source control with Gitea\n• Build orchestration via Woodpecker runners\n• Container image build and registry pipelines\n• Reverse proxy and TLS integration\n• Automated build-and-push workflows across homelab services\n\nCurrent focus is on runner stability, registry authentication, certificate trust, and streamlining automated delivery pipelines.",
      image: "/projects/ci-cd.png",
      links: [],
    },
    {
      title: "Self-Hosted MLOps Platform",
      dates: "Ongoing",
      location: "OpenClaw • LiteLLM • Proxmox GPU VM",
      description:
        "Building a self-hosted MLOps and AI runtime platform for model orchestration and inference:\n\n• GPU passthrough on Proxmox with NVIDIA runtime\n• LiteLLM-based model gateway deployment\n• Multi-VM architecture for control plane and inference layers\n• Containerized AI workloads with internal service networking\n• Foundation for orchestration, inference services, and operational tooling\n\nProgressing toward a full-stack AI platform that combines model runtime, orchestration, and self-hosted operational infrastructure.",
      image: "/projects/mlops.png",
      links: [],
    },
  ],
};