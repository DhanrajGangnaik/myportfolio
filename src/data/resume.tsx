import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhanraj Gangnaik",
  initials: "DG",
  url: "https://dhanrajgangnaik.dev",

  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune",

  // 🔴 SEO CRITICAL (name + role + keywords)
  description:
    "Dhanraj Gangnaik is a Cloud & DevOps Engineer specializing in Kubernetes, self-hosted infrastructure, CI/CD pipelines, and hybrid cloud systems.",

  // 🔴 RECRUITER + SEO OPTIMIZED
  summary:
    "Dhanraj Gangnaik is a Cloud and DevOps Engineer focused on designing and operating production-style infrastructure across self-hosted and hybrid cloud environments.\n\nHe builds Kubernetes platforms, CI/CD pipelines, GitOps workflows, and observability systems using tools such as Prometheus, Grafana, and Proxmox.\n\nHis work emphasizes reliability, scalability, and reproducibility, translating complex distributed systems into resilient, production-ready architectures.",

  avatarUrl: "",

  // 🔴 SKILLS EXPANDED (better keyword coverage)
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
    { name: "Talos Linux" },
    { name: "Distributed Systems" },
    { name: "Observability" },
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
        "Designed and operated a distributed self-hosted data and observability platform across multiple Proxmox VMs.\n\n• PostgreSQL HA with replication and WAL archiving\n• Prometheus and Grafana for metrics, alerting, and dashboards\n• ClickHouse-based centralized log analytics pipeline\n• TimescaleDB for time-series workloads\n• Multi-service deployment across distributed infrastructure\n\nBuilt end-to-end telemetry pipelines for metrics, logs, and time-series analytics, enabling SQL-driven detection and full-stack observability.",

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
        "Designed and deployed a 9-node high-availability Kubernetes cluster using Talos Linux.\n\n• 3 control planes + 6 worker nodes\n• MetalLB for LoadBalancer networking\n• Ingress-NGINX for traffic routing\n• Rancher for cluster lifecycle management\n• Distributed workload orchestration and scheduling\n\nEngineered for control-plane resilience, high availability, and production-style Kubernetes operations in a self-hosted environment.",

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
        "Engineered a hybrid cloud Kubernetes architecture combining a self-hosted Talos cluster with AWS EKS for failover.\n\n• Local cluster as primary workload environment\n• AWS EKS as standby failover layer\n• Ingress-based traffic switching between environments\n• Cross-cluster workload validation and synchronization\n• Foundation for automated failover and hybrid deployment strategies\n\nDesigned for high availability, workload continuity, and hybrid cloud resilience.",

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
      location: "Gitea • Woodpecker • Docker Registry",
      description:
        "Building a self-hosted CI/CD platform for automated software delivery.\n\n• Source control with Gitea\n• CI orchestration using Woodpecker runners\n• Container build and private registry pipelines\n• TLS, reverse proxy, and authentication integration\n• Automated build and deployment workflows\n\nFocused on pipeline reliability, runner stability, and secure artifact distribution.",

      image: "/projects/ci-cd.png",
      links: [],
    },

    {
      title: "Self-Hosted MLOps Platform",
      dates: "Ongoing",
      location: "OpenClaw • LiteLLM • GPU VM",
      description:
        "Designing a self-hosted MLOps and AI runtime platform.\n\n• GPU passthrough on Proxmox\n• LiteLLM-based model gateway\n• Multi-VM architecture for control and inference layers\n• Containerized AI workloads and internal networking\n• Foundation for orchestration and model serving\n\nBuilding toward a full-stack AI platform integrating infrastructure, orchestration, and inference services.",

      image: "/projects/mlops.png",
      links: [],
    },
  ],
};